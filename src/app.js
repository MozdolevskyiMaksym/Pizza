import React from 'react';
import { Routes, Route } from 'react-router-dom';

import PizzaPage from './pages/pizza/pizza';
import LoopControlComponent from './pages/loop-control/loop-control';
import FormPage from './pages/form/form';

import './app.scss';
import './shared/styles/variables.scss';

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<PizzaPage />} />
        <Route path="/loop-control" element={<LoopControlComponent />} />
        <Route path="/form" element={<FormPage />} />
      </Routes>
    </div>
  );
};

export default App;
