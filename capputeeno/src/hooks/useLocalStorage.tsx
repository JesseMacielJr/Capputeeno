import React from "react";

export function useLocalStorage<T>(item: string) {
  const [value, setValue] = React.useState(
    JSON.parse(window.localStorage.getItem(item) ?? "{}")
  );

  const updateLocalStorage = (newValue: T) => {
    setValue(newValue);
    window.localStorage.setItem(item, JSON.stringify(newValue));
  };

  return {
    value,
    updateLocalStorage,
  };
}
