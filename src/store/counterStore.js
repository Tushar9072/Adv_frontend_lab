let count = 0;
let listeners = new Set();

function getSnapshot() {
  return count;
}

function subscribe(listener) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function setCount(newValue) {
  count = newValue;
  listeners.forEach((l) => l());
}

export const counterStore = {
  subscribe,
  getSnapshot,
  getServerSnapshot: () => 0,
  increment() {
    setCount(count + 1);
  },
  decrement() {
    setCount(count - 1);
  },
  reset() {
    setCount(0);
  }
};
