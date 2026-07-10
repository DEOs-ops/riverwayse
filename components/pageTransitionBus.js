let listeners = [];

export function subscribeRipple(fn) {
  listeners.push(fn);
  return () => {
    listeners = listeners.filter((l) => l !== fn);
  };
}

export function fireRipple(x, y) {
  listeners.forEach((fn) => fn(x, y));
}
