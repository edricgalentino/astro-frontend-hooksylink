class storage {
  public static set(key: string, data: any, withParse?: boolean) {
    if (withParse) {
      localStorage.setItem(key, JSON.stringify(data));
    } else {
      localStorage.setItem(key, data);
    }
  }
  public static get<T>(key: string, withParse?: boolean): T | null {
    const item = localStorage.getItem(key);
    if (!item) return null;
    if (withParse) {
      return JSON.stringify(localStorage.getItem(key)) as T;
    } else {
      return localStorage.getItem(key) as T;
    }
  }
  public static remove(key: string) {
    localStorage.removeItem(key);
  }

  public static clear() {
    localStorage.clear();
  }
}

export default storage;
