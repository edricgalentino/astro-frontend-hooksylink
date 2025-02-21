import type { cookieConfigOption } from "./cookie";
import { cookieValueAdapter, generateCookieConfig } from "./utils";

class Cookies {
  static get<T = any>(key: string): T {
    const cookieValue = document.cookie
      .split("; ")
      .find((row) => row.startsWith(`${key}=`))
      ?.split("=")[1];
    let returnedData = null;
    if (cookieValue) {
      try {
        returnedData = JSON.parse(cookieValue);
      } catch (error: any) {
        returnedData = cookieValue;
      }
    }

    return returnedData;
  }

  static set(
    key: string,
    value: any,
    {
      domain = window.location.hostname,
      httpOnly = false,
      maxAge = 1 * 24 * 60 * 60,
      secure = false,
      path = "/",
      sameSite = "lax",
    }: cookieConfigOption,
  ) {
    const cookieString = `${key}=${cookieValueAdapter(value)};${generateCookieConfig({
      domain,
      httpOnly,
      maxAge,
      secure,
      path,
      sameSite,
    })}`;

    document.cookie = cookieString;
  }

  static delete(key: string) {
    Cookies.set(key, "", {
      maxAge: 0,
    });
  }

  static clear() {
    const cookies = document.cookie.split("; ");

    for (const cookie of cookies) {
      const [name] = cookie.split("=");
      document.cookie = `${name}=; max-age=0;`;
    }
  }
}

export default Cookies;
