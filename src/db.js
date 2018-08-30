export const LocalStorage = () => ({
  recordStorage: (state) => {
    localStorage.setItem('tasks', JSON.stringify(state));
  },

  getStorage: (key) => {
    return JSON.parse(localStorage.getItem(key))
      ? JSON.parse(localStorage.getItem(key))
      : [];
  },
});
