import { useState } from 'react';

export default (key, initialValue = '') => {
  const [value, setValue] = useState(() => {
    return localStorage.getItem(key) || initialValue;
  });

  const setLocalStorageValue = (value) => {
    setValue(value);
    localStorage.setItem(key, value)
  }

  return [value, setLocalStorageValue];
}
