const useAdditionalComponents = () => {
  const components = [
    { name: 'File Reader', path: 'file-reader' },
    { name: 'Math methods', path: 'math-methods' },
    { name: 'Linear data', path: 'linear-data' },
    { name: 'Non linear data', path: 'non-linear-data' },
  ];
  return {
    components,
  };
};

export default useAdditionalComponents;
