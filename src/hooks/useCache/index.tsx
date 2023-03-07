interface CacheResponse {
  setLocalStorage: (key: string, item: string) => void;
  getLocalStorage: (key: string) => [];
}

export const useCache = (): CacheResponse => {
  const getLocalStorage = (key: string) => {
    const data: string | null = localStorage.getItem(key);

    return data && JSON.parse(data);
  };

  const setLocalStorage = (key: string, item: string) => {
    let storedHistory: string[] = getLocalStorage(key);

    if (storedHistory && item && item.length > 0) {
      storedHistory.unshift(item);
    } else {
      storedHistory = [item];
    }

    return localStorage.setItem(key, JSON.stringify(storedHistory));
  };

  return { setLocalStorage, getLocalStorage };
};

export default useCache;
