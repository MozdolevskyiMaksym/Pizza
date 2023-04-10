const useAdditionalComponents = () => {
  const components = [
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
  ];
  return {
    components,
  };
};

export default useAdditionalComponents;
