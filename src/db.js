export const LocalStorage = () => ({
  recordStorage: (key, state) => {
    localStorage.setItem(key, JSON.stringify(state));
  },

  getStorage: (key) => {
    return JSON.parse(localStorage.getItem(key))
      ? JSON.parse(localStorage.getItem(key))
      : [];
  },
});
