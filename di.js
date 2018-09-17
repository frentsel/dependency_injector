const injector = (function() {
  const dependencies = {};
  const register = function(deps, keys) {
    keys.forEach((key, n) => {
      if (!dependencies[key]) {
        dependencies[key] = deps[n];
      }
    });
  };
  const resolve = function(...params) {
    const fn = params.pop();
    const deps = params.map(key => dependencies[key]);
    return (...args) => fn.apply(this, [...deps, ...args]);
  };
  return { register, resolve };
})();
