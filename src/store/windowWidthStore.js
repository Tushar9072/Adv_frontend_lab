
let listeners = new Set();

function getSnapshot() {
  return window.innerWidth;
}

function subscribe(callback) {
  listeners.add(callback);

  const handler = () => callback();
  window.addEventListener("resize", handler);

  return () => {
    listeners.delete(callback);
    window.removeEventListener("resize", handler);
  };
}

export const windowWidthStore = {
  subscribe,
  getSnapshot,
  getServerSnapshot: () => 1024,
};
