const LOCALSTORAGE_KEY = 'Contacts';
export const getItemsFromLocalStorage = (item, key = LOCALSTORAGE_KEY) =>
  JSON.parse(localStorage.getItem(key, item));

export const setItemsToLocalStorage = (items, key = LOCALSTORAGE_KEY) =>
  localStorage.setItem(key, JSON.stringify(items));
