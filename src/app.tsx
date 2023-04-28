import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Route, Routes } from 'react-router-dom';
import axe from 'react-axe';

// Main pages
import Pizza from './pages/pizza/pizza';
import Drinks from './pages/drinks/drinks';
import Salats from './pages/salats/salats';
import PizzaDetails from './pages/pizza-details/pizza-details';
import Order from './pages/order/order';
import Discounts from './pages/discounts/discounts';
import AdditionalComponents from './pages/additional-components/additional-components';

// Secondary pages
import Cars from './secondary-pages/oop/cars/cars';
import Shapes from './secondary-pages/oop/shapes/shapes';
import Agregation from './secondary-pages/agregation/agregation';
import Composition from './secondary-pages/composition/composition';
import DerivedComponent from './secondary-pages/inheritance/inheritance';
import ClassComponent from './secondary-pages/class-component/class-component';

import FormPage from './secondary-pages/form/form';
import DomPurify from './secondary-pages/dom-purify/dom-purify';
import Contacts from './secondary-pages/responsive-form/responsive-form';
import FormikSanitizingData from './secondary-pages/formik-sanitizing-data/formik-sanitizing-data';

import FacadePattern from './secondary-pages/facade-pattern/facade-pattern';
import CommandPattern from './secondary-pages/command-pattern/command-pattern';
import BuilderPattern from './secondary-pages/builder-pattern/builder-pattern';
import SingletonPattern from './secondary-pages/singleton-pattern/singleton-pattern';
import DecoratorPattern from './secondary-pages/decorator-pattern/decorator-pattern';
import ChainOfResponsibilityPattern from './secondary-pages/chain-of-responsibility-pattern/chain-of-responsibility-pattern';

import FileReader from './secondary-pages/file-reader/file-reader';
import IframeUsage from './secondary-pages/iframe-usage/iframe-usage';
import FileUploader from './secondary-pages/file-uploader/file-uploader';
import ImageUploader from './secondary-pages/image-uploader/image-uploader';
import ImageUploader2 from './secondary-pages/image-uploader-2/image-uploader-2';

import IndexDBTool from './secondary-pages/index-db-tools/index-db-tool';
import StorageTools from './secondary-pages/storage-tools/storage-tools';

import Table from './secondary-pages/table/table';
import AnimatedGridTable from './secondary-pages/animated-grid-table/animated-grid-table';

import FloatPosition from './secondary-pages/float/float';
import Animation from './secondary-pages/animation/animation';
import TransformsAndTransitions from './secondary-pages/transforms-transitions/transforms-transitions';

import Polyfills from './secondary-pages/polyfills/polyfils';
import Underscore from './secondary-pages/underscore/underscore';
import LinearData from './secondary-pages/linear-data/linear-data';
import MathMethods from './secondary-pages/math-methods/math-methods';
import CustomEvent from './secondary-pages/custom-event/custom-event';
import CustomEvents from './secondary-pages/custom-events/custom-events';
import PortalUsage from './secondary-pages/portal-usage/portal-usage';
import Compatibility from './secondary-pages/compatibility/compatibility';
import NonLinearData from './secondary-pages/non-linear-data/non-linear-data';
import LoopControlComponent from './secondary-pages/loop-control/loop-control';
import RenderPropsUsage from './secondary-pages/render-props-usage/render-props-usage';
import ImmutabilityExample from './secondary-pages/immutability-example/immutability-example';
import TimeZoneConverter from './secondary-pages/time-zone-converter/time-zone-converter';
import DependencyVulnerabilityCheck from './secondary-pages/dependency-vulnerability-check/dependency-vulnerability-check';
import IntlProviderExample from './secondary-pages/intl-provider/intl-provider';

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
          {/* Main pages */}
          <Route path="/" element={<Pizza />} />
          <Route path="/pizza-details/:id" element={<PizzaDetails />} />
          <Route path="/drinks" element={<Drinks />} />
          <Route path="/salats" element={<Salats />} />
          <Route path="/order" element={<Order />} />
          <Route path="/discounts-page" element={<Discounts />} />
          <Route path="/components" element={<AdditionalComponents />} />
          <Route path="/class-component" element={<ClassComponent />} />

          {/* Secondary pages */}
          <Route path="/cars" element={<Cars />} />
          <Route path="/shapes" element={<Shapes />} />
          <Route path="/agregation" element={<Agregation />} />
          <Route path="/composition" element={<Composition />} />
          <Route path="/inheritance" element={<DerivedComponent />} />
          <Route path="/form" element={<FormPage />} />
          <Route path="/dom-purify" element={<DomPurify />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route
            path="/formik-sanitizing-data"
            element={<FormikSanitizingData />}
          />
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
          <Route path="/file-reader" element={<FileReader />} />
          <Route path="/iframe" element={<IframeUsage />} />
          <Route path="/file-uploader" element={<FileUploader />} />
          <Route path="/image-uploader" element={<ImageUploader />} />
          <Route path="/image-uploader-2" element={<ImageUploader2 />} />
          <Route path="/index-db-tool" element={<IndexDBTool />} />
          <Route path="/storage-tools" element={<StorageTools />} />
          <Route path="/table" element={<Table />} />
          <Route path="/animated-grid-table" element={<AnimatedGridTable />} />
          <Route path="/float-position" element={<FloatPosition />} />
          <Route path="/animation" element={<Animation />} />
          <Route
            path="/transforms-transitions"
            element={<TransformsAndTransitions />}
          />
          <Route path="/polyfills" element={<Polyfills />} />
          <Route path="/underscore" element={<Underscore />} />
          <Route path="/linear-data" element={<LinearData />} />
          <Route path="/non-linear-data" element={<NonLinearData />} />
          <Route path="/math-methods" element={<MathMethods />} />
          <Route path="/custom-event" element={<CustomEvent />} />
          <Route path="/custom-events" element={<CustomEvents />} />
          <Route path="/portal-usage" element={<PortalUsage />} />
          <Route path="/compatibility" element={<Compatibility />} />
          <Route path="/loop-control" element={<LoopControlComponent />} />
          <Route path="/render-props-usage" element={<RenderPropsUsage />} />
          <Route
            path="/immutability-example"
            element={<ImmutabilityExample />}
          />
          <Route path="/time-zone-converter" element={<TimeZoneConverter />} />
          <Route
            path="/dependency-vulnerability-checker"
            element={<DependencyVulnerabilityCheck />}
          />
          <Route path="/intl-provider" element={<IntlProviderExample />} />
        </Routes>
      </div>
    );
  }
}

export default App;
