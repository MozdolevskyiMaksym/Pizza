import React from 'react';
import { Routes, Route } from 'react-router-dom';

import PizzaPage from './pages/pizza/pizza';
import LoopControlComponent from './pages/loop-control/loop-control';
import FormPage from './pages/form/form';

import './app.scss';
import './shared/styles/variables.scss';
import AdditionalComponents from './pages/additional-components/additional-components';
import FileReader from './pages/file-reader/file-reader';
import MathMethods from './pages/math-methods/math-methods';

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<PizzaPage />} />
        <Route path="/loop-control" element={<LoopControlComponent />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="/components" element={<AdditionalComponents />} />
        <Route path="/file-reader" element={<FileReader />} />
        <Route path="/math-methods" element={<MathMethods />} />
      </Routes>
    </div>
  );
};

export default App;
