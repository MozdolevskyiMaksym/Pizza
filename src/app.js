import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Route, Routes } from 'react-router-dom';
import axe from 'react-axe';

import PizzaPage from './pages/pizza/pizza';
import LoopControlComponent from './pages/loop-control/loop-control';
import FormPage from './pages/form/form';
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
import TimeZoneConverter from './pages/time-zone-converter/time-zone-converter';
import FormikSanitizingData from './pages/formik-sanitizing-data/formik-sanitizing-data';
import IndexDBTool from './pages/index-db-tools/index-db-tool';
import StorageTools from './pages/storage-tools/storage-tools';
import FileUploader from './pages/file-uploader/file-uploader';
import ImageUploader from './pages/image-uploader/image-uploader';
import ImmutabilityExample from './pages/immutability-example/immutability-example';
import ImageUploader2 from './pages/image-uploader-2/image-uploader-2';
import Underscore from './pages/underscore/underscore';
import Compatibility from './pages/compatibility/compatibility';
import Polyfills from './pages/polyfills/polyfils';
import BuilderPattern from './pages/builder-pattern/builder-pattern';
import SingletonPattern from './pages/singleton-pattern/singleton-pattern';
import FacadePattern from './pages/facade-pattern/facade-pattern';
import DecoratorPattern from './pages/decorator-pattern/decorator-pattern';
import ChainOfResponsibilityPattern from './pages/chain-of-responsibility-pattern/chain-of-responsibility-pattern';
import CommandPattern from './pages/command-pattern/command-pattern';
import Agregation from './pages/agregation/agregation';
import Composition from './pages/composition/composition';
import DerivedComponent from './pages/inheritance/inheritance';
import DomPurify from './pages/dom-purify/dom-purify';
import DependencyVulnerabilityCheck from './pages/dependency-vulnerability-check/dependency-vulnerability-check';

import './app.scss';

class App extends Component {
  componentDidMount() {
    axe(React, ReactDOM, 1000);

    // Нужно смотреть в консоль лог.

    //react-axe: Elements must have sufficient color contrast: 
    // Используйте инструменты для проверки контраста цветов, например, https://webaim.org/resources/contrastchecker/ или https://contrast-ratio.com/.
    // Они помогут определить, какие элементы на странице имеют недостаточный контраст.

    // Обновите стили элементов на странице, увеличив контрастность цветов. Вы можете изменить цвет фона, текста или обоих, чтобы обеспечить достаточный контраст.

    // Убедитесь, что обновленные стили не нарушают дизайн вашей страницы и не затрудняют ее восприятие другими пользователями.

    // react-axe: all page content must be contained by landmarks:
    // Сообщение "all page content must be contained by landmarks" от инструмента React-axe означает, что на странице отсутствуют элементы "landmark",
    // которые помогают пользователям быстрее и легче ориентироваться на странице.
    // Landmarks представляют области страницы, содержащие семантически связанный контент, например, header, main, nav, footer и т.д.
  }

  render() {
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
          <Route path="/time-zone-converter" element={<TimeZoneConverter />} />
          <Route
            path="/formik-sanitizing-data"
            element={<FormikSanitizingData />}
          />
          <Route path="/index-db-tool" element={<IndexDBTool />} />
          <Route path="/storage-tools" element={<StorageTools />} />
          <Route path="/file-uploader" element={<FileUploader />} />
          <Route path="/image-uploader" element={<ImageUploader />} />
          <Route path="/image-uploader-2" element={<ImageUploader2 />} />
          <Route path="/immutability-example" element={<ImmutabilityExample />} />
          <Route path="/underscore" element={<Underscore />} />
          <Route path="/compatibility" element={<Compatibility />} />
          Polyfills
          <Route path="/polyfills" element={<Polyfills />} />
          {/* Creational Patterns */}
          <Route path="/builder-pattern" element={<BuilderPattern />} />
          <Route path="/singleton-pattern" element={<SingletonPattern />} />
          {/* Structural Patterns */}
          <Route path="/facade-pattern" element={<FacadePattern />} />
          <Route path="/decorator-pattern" element={<DecoratorPattern />} />
          {/* Behavioral Patterns */}
          <Route
            path="chain-of-responsibility-pattern"
            element={<ChainOfResponsibilityPattern />}
          />
          <Route path="/command-pattern" element={<CommandPattern />} />
          {/*  */}
          <Route path="/agregation" element={<Agregation />} />
          <Route path="/composition" element={<Composition />} />
          <Route path="/inheritance" element={<DerivedComponent />} />
          <Route path="/dom-purify" element={<DomPurify />} />
          <Route path="/dependency-vulnerability-checker" element={<DependencyVulnerabilityCheck />} />
        </Routes>
      </div>
    );
  }
};

export default App;
