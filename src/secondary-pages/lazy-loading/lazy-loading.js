async function loadModule() {
  const module = await import('../../secondary-pages/oop/shapes/shapes');

  return module.getArea();
}

document.querySelector('button').addEventListener('click', loadModule);
