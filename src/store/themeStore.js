let theme = "light";
let listeners = new Set();

function getSnapshot() {
  return theme;
}

function subscribe(listener) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function updateTheme(newTheme) {
  theme = newTheme;
  listeners.forEach((l) => l());
}

export const themeStore = {
  subscribe,
  getSnapshot,
  getServerSnapshot: () => "light",
  toggle() {
    updateTheme(theme === "light" ? "dark" : "light");
  },
  setLight() {
    updateTheme("light");
  },
  setDark() {
    updateTheme("dark");
  }
};
