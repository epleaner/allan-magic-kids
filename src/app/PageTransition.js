'use client';

import { NextReactP5Wrapper } from '@p5-wrapper/next';

const sketch = (p) => {
  const maxSpeed = 15;
  let i = 0;
  let go = false;
  let bgColor;
  let dots = [];
  let onDone;

  class Dot {
    constructor(x, y, s) {
      this.x = x;
      this.y = y;
      this.s = s;
      this.r = 0;
    }

    update() {
      this.r += this.s;
      if (this.r > (window.innerWidth + window.innerHeight) / 2) {
        go = false;
        onDone();
      }
    }

    draw() {
      p.push();
      p.translate(this.x, this.y);
      p.fill(bgColor);

      p.circle(0, 0, this.r);
      p.pop();
    }
  }

  p.setup = () => {
    p.createCanvas(window.innerWidth, window.innerHeight);
    p.noStroke();
    for (let i = 0; i < 3; i++) {
      dots.push(
        new Dot(p.random(p.width), p.random(p.height), p.random(1, maxSpeed))
      );
    }
  };

  p.draw = () => {
    if (go) {
      i++;
      dots.forEach((dot) => {
        dot.update();
        dot.draw();
      });

      if (i % 200)
        dots.push(
          new Dot(p.random(p.width), p.random(p.height), p.random(1, maxSpeed))
        );
    }
  };

  p.updateWithProps = (props) => {
    go = props.go;
    bgColor = props.bgColor;
    onDone = props.onDone;
  };

  p.windowResized = () => {
    p.resizeCanvas(window.innerWidth, window.innerHeight);
  };
};

export default function PageTransition({ go = false, bgColor, onDone }) {
  return <NextReactP5Wrapper {...{ sketch, go, bgColor, onDone }} />;
}
