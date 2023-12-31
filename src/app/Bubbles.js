'use client';

import { NextReactP5Wrapper } from '@p5-wrapper/next';

const colors = [
  '#FFCEC8',
  '#AD8FBF',
  '#93CACC',
  '#0092A9',
  '#5C995C',
  '#E08C1B',
];

const sketch = (p) => {
  let flowers = [];
  let flowfield;
  let count = 0;
  let bgColor;

  p.updateWithProps = (props) => {
    bgColor = props.bgColor;
  };

  class Flowfield {
    constructor(scale = 10) {
      this.scale = scale;
      this.zoff = 0;
      this.inc = 0.1;
      this.show = false;

      this.cols = Math.floor(p.width / this.scale);
      this.rows = Math.floor(p.height / this.scale);

      this.field = new Array(this.cols * this.rows);
    }

    update = function () {
      for (let y = 0; y < this.rows; y++) {
        for (let x = 0; x < this.cols; x++) {
          let index = x + y * this.cols;
          let angle =
            -p.noise(x * this.inc, y * this.inc, this.zoff) *
            (p.TWO_PI / 3 / 2);
          let v = p.constructor.Vector.fromAngle(angle);
          v.setMag(1);
          flowfield[index] = v;

          if (this.show) {
            p.stroke(0, 25);
            p.push();
            p.translate(x * this.scale, y * this.scale);
            p.rotate(v.heading());
            p.strokeWeight(1);
            p.line(0, 0, this.scale, 0);
            p.pop();
          }
        }

        this.zoff += 0.0003;
      }
    };

    toggleShow() {
      this.show = !this.show;
    }
  }

  class Particle {
    constructor(
      x,
      y,
      flowfield = new Flowfield(),
      touched = false,
      canDie = true,
      maxspeed = 5,
      color
    ) {
      this.id = Date.now();
      this.color = color;
      this.pos = p.createVector(x, y);
      this.vel = p.createVector(
        p.map(Math.random(), 0, 1, -1, 1),
        p.map(Math.random(), 0, 1, -1, 1)
      );
      this.acc = p.createVector(0, 0);
      this.maxspeed = Math.random() * maxspeed + 1;
      this.flowfield = flowfield;
      this.touched = touched;
      this.dead = false;
      this.canDie = canDie;

      this.prevPos = this.pos.copy();
    }

    update = function () {
      if (this.touched) {
        this.vel.add(this.acc);
        this.vel.limit(this.maxspeed);
        this.pos.add(this.vel);
        this.acc.mult(0);
      }
    };

    follow = function (vectors) {
      let x = Math.floor(this.pos.x / this.flowfield.scale);
      let y = Math.floor(this.pos.y / this.flowfield.scale);
      let index = x + y * this.flowfield.cols;
      let force = vectors[index];
      this.applyForce(force);
    };

    applyForce = function (force) {
      this.acc.add(force);
    };

    show = function () {
      p.line(this.pos.x, this.pos.y, this.prevPos.x, this.prevPos.y);
      this.updatePrev();
    };

    updatePrev = function () {
      this.prevPos.x = this.pos.x;
      this.prevPos.y = this.pos.y;
    };

    edges = function () {
      if (this.dead) return;
      if (this.pos.x > p.width) {
        this.dead = true;
      }
      if (this.pos.x < 0) {
        this.dead = true;
      }
      if (this.pos.y > p.height) {
        this.dead = true;
      }
      if (this.pos.y < 0) {
        this.dead = true;
      }
    };
  }

  class Flower {
    constructor(x, y, flowfield = new Flowfield(), color) {
      this.color = color;
      this.center = new Particle(x, y, flowfield, true, false, 5, color);
      this.particles = [];
      this.stems = [];
      this.curves = [];
      this.flowfield = flowfield;
      this.radius = 90 + p.map(Math.random(), 0, 1, 0, 90);

      this.mode = 'circle';
    }

    update = function () {
      if (this.mode !== 'circle') return;
      this.center.follow(flowfield);
      this.center.update();
      this.center.edges(false);
      if (
        p.mouseX <= this.center.pos.x + this.radius &&
        p.mouseX >= this.center.pos.x - this.radius &&
        p.mouseY <= this.center.pos.y + this.radius &&
        p.mouseY >= this.center.pos.y - this.radius
      ) {
        this.mode = 'popped';

        for (let i = 0; i < 200; i++) {
          const theta = Math.random() * 2 * p.PI;
          let x = this.center.pos.x + (this.radius / 2) * p.cos(theta);
          let y = this.center.pos.y + (this.radius / 2) * p.sin(theta);
          this.particles[this.particles.length] = new Particle(
            x,
            y,
            flowfield,
            true,
            true,
            5,
            this.color
          );
        }
      }
    };

    show = function () {
      p.noStroke();
      let color = p.color(this.color);
      color.setAlpha(70);
      p.fill(color);
      if (this.mode === 'circle')
        p.circle(this.center.pos.x, this.center.pos.y, this.radius);
      else {
        p.noFill();
        p.stroke(this.color);
        for (let i = 0; i < this.particles.length; i++) {
          this.particles[i].follow(flowfield);
          this.particles[i].update();
          this.particles[i].edges();
          this.particles[i].show();
        }

        this.particles = this.particles.filter((p) => !p.dead);
      }
    };
  }

  p.setup = () => {
    p.createCanvas(window.innerWidth, window.innerHeight);
    flowfield = new Flowfield();
    p.noStroke();
    p.strokeWeight(1.5);
    count = 0;
  };

  p.draw = () => {
    p.background(bgColor);

    flowfield.update();

    for (let i = 0; i < flowers.length; i++) {
      flowers[i].update();
      flowers[i].show();
    }

    count++;
    if (count === 10) {
      if (Math.random() > 0.7) createNewFlower();
      count = 0;
    }
  };

  p.windowResized = () => {
    p.resizeCanvas(window.innerWidth, window.innerHeight);
  };

  const createNewFlower = () => {
    const color = colors[Math.floor(Math.random() * colors.length)];

    flowers[flowers.length] = new Flower(
      p.map(Math.random(), 0, 1, -180, 180),
      p.map(Math.random(), 0, 1, p.height + 180, p.height - 180),
      flowfield,
      color
    );
  };

  p.mouseClicked = () => {
    // createNewFlower();
  };
};

export default function Bubbles({ bgColor = '#F8F2DC' }) {
  return <NextReactP5Wrapper {...{ sketch, bgColor }} />;
}
