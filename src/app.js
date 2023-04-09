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
import FloatPosition from './pages/float/float';
import Table from './pages/table/table';
import Animation from './pages/animation/animation';
import TransformsAndTransitions from './pages/transforms-transitions/transforms-transitions';
import AnimatedGridTable from './pages/animated-grid-table/animated-grid-table';
import Contacts from './pages/responsive-form/responsive-form';
import IframeUsage from './pages/iframe-usage/iframe-usage';

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
        <Route path="/float-position" element={<FloatPosition />} />
        <Route path="/table" element={<Table />} />
        <Route path="/animation" element={<Animation />} />
        <Route
          path="/transforms-transitions"
          element={<TransformsAndTransitions />}
        />
        <Route path="/animated-grid-table" element={<AnimatedGridTable />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/iframe" element={<IframeUsage />} />
      </Routes>
    </div>
  );
};

export default App;
