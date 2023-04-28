async function loadModule(path) {
  const module = await import(path);
  return module;
}

export default loadModule;
