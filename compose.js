export function compose ({ base = class {}, ...components } = {}) {
  const finalComposition = Object.values(components).reduce((composed, currentComponent) => {
    return currentComponent(composed);
  }, base);

  return finalComposition;
}