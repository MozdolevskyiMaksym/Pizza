const useAdditionalComponents = () => {
  const components = [
    { name: 'File Reader', path: 'file-reader' },
    { name: 'Math methods', path: 'math-methods' },
    { name: 'Linear data', path: 'linear-data' },
    { name: 'Non linear data', path: 'non-linear-data' },
    { name: 'Portal usage', path: 'portal-usage' },
    { name: 'Render props usage', path: 'render-props-usage' },
  ];
  return {
    components,
  };
};

export default useAdditionalComponents;
