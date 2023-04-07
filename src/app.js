import React from 'react';
import { Route, Routes } from 'react-router-dom';

import PizzaPage from './pages/pizza/pizza';
import LoopControlComponent from './pages/loop-control/loop-control';
import FormPage from './pages/form/form';

import './app.scss';
import './shared/styles/variables.scss';
import AdditionalComponents from './pages/additional-components/additional-components';
import FileReader from './pages/file-reader/file-reader';
import MathMethods from './pages/math-methods/math-methods';
import NonLinearData from './pages/non-linear-data/non-linear-data';
import LinearData from './pages/linear-data/linear-data';
import PortalUsage from './pages/portal-usage/portal-usage';
import RenderPropsUsage from './pages/render-props-usage/render-props-usage';

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
        <Route path="/non-linear-data" element={<NonLinearData />} />
        <Route path="/linear-data" element={<LinearData />} />
        <Route path="/portal-usage" element={<PortalUsage />} />
        <Route path="/render-props-usage" element={<RenderPropsUsage />} />
      </Routes>
    </div>
  );
};

export default App;
