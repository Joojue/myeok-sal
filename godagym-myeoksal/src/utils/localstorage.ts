export const saveItem = (key: string, value: string) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getItem = (key: string) => {
  const data = localStorage.getItem(key);
  if (data) {
    return JSON.parse(data);
  }
};

export const removeItem = (key: string) => {
  localStorage.removeItem(key);
};
