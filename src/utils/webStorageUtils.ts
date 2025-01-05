class WebStorageUtils {
  setItemInSessionStorage(key: string, value: string): void {
    sessionStorage.setItem(key, value);
  }

  setItemInLocalStorage(key: string, value: string): void {
    localStorage.setItem(key, value);
  }

  getItemFromSessionStorage(key: string): string | null {
    return sessionStorage.getItem(key);
  }

  getItemFromLocalStorage(key: string): string | null {
    return localStorage.getItem(key);
  }
}

export default new WebStorageUtils();
