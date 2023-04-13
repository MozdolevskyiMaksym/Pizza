import { getMapMethod } from '../../shared/helpers/polyfills/polyfills';

const useAdditionalComponents = () => {
  const components = [
    { name: 'Loop control', path: 'loop-control' },
    { name: 'File Reader', path: 'file-reader' },
    { name: 'Math methods', path: 'math-methods' },
    { name: 'Linear data', path: 'linear-data' },
    { name: 'Non linear data', path: 'non-linear-data' },
    { name: 'Portal usage', path: 'portal-usage' },
    { name: 'Render props usage', path: 'render-props-usage' },
    { name: 'Float position', path: 'float-position' },
    { name: 'Table', path: 'table' },
    { name: 'Animation', path: 'animation' },
    { name: 'Transforms and Transitions', path: 'transforms-transitions' },
    { name: 'Animated Grid Table', path: 'animated-grid-table' },
    { name: 'Responsive Form', path: 'contacts' },
    { name: 'Iframe usage', path: 'iframe' },
    { name: 'Time zone converter', path: 'time-zone-converter' },
    { name: 'Formik - sanitizing data', path: 'formik-sanitizing-data' },
    { name: 'IndexDB Tool', path: 'index-db-tool' },
    { name: 'Storage Tools', path: 'storage-tools' },
    { name: 'File uploader', path: 'file-uploader' },
    { name: 'Image uploader', path: 'image-uploader' },
    { name: 'Image uploader 2', path: 'image-uploader-2' },
    { name: 'Immutability example', path: 'immutability-example' },
    { name: 'Underscore', path: 'underscore' },
    { name: 'Compatibility', path: 'compatibility' },
    { name: 'Polyfills', path: 'polyfills' },
    { name: 'Builder pattern', path: 'builder-pattern' },
    { name: 'Singleton pattern', path: 'singleton-pattern' },
    { name: 'Facade pattern', path: 'facade-pattern' },
    { name: 'Decorator pattern', path: 'decorator-pattern' },
    {
      name: 'Chain of responsibility pattern',
      path: 'chain-of-responsibility-pattern',
    },
    { name: 'Command pattern', path: 'command-pattern' },
    { name: 'Agregation', path: 'agregation' },
    { name: 'Composition', path: 'composition' },
    { name: 'Inheritance', path: 'inheritance' },
  ];

  if (!Array.prototype.includes) {
    getMapMethod();
  }

  return {
    components,
  };
};

export default useAdditionalComponents;
