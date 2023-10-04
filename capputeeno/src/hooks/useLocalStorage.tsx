/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";

export function useLocalStorage<T>(item: string, initialValue: T) {
  const [value, setValue] = React.useState<T>(initialValue);

  React.useEffect(() => {
    if (typeof window === "undefined") return;
    let value = localStorage.getItem(item);
    if (value) setValue(JSON.parse(value));
  }, [window]);

  const updateLocalStorage = (newValue: T) => {
    setValue(newValue);
    localStorage.setItem(item, JSON.stringify(newValue));
  };

  return {
    value,
    updateLocalStorage,
  };
}
