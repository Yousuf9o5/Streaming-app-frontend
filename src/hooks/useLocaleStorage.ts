import { useEffect, useState } from "react";

function useLocaleStorage(key: string): [string, (newValue: string) => void] {
  const [storage, setValue] = useState<string>("");

  useEffect(() => {
    const storageItem = localStorage.getItem(key);

    setValue(storageItem as string);
  }, []);

  const setStorage = (newValue: string): void => {
    localStorage.setItem(key, newValue);
    setValue(newValue as string);
  };

  return [storage, setStorage];
}

export default useLocaleStorage;
