import React from 'react';
import Home from './Home';
import Bubbles from './Bubbles';
import './App.scss';
import Page from './Page';

const App = () => {
  return (
    <div className="relative">
      <Page bgColor="bg-red-400">
        <Home />
      </Page>
      <div className="absolute -my-10 z-10">
        <Bubbles />
      </div>
    </div>
  );
};

export default App;
