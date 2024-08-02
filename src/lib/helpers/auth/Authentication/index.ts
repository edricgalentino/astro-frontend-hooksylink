import crypto from "../../crypto";
import type { cookieConfigOption } from "../../cookie/cookie";
import type { User } from "../../../../modules/User/user";
import Http from "../../../http";
import JWT from "../../jwt";
import url from "../../../http/url";
import { $AUTH, $IS_LOGIN, $TOKEN, $USER } from "../../../stores/auth";
import Cookies from "../../cookie";

type userMeResponse = {
  err_code: number;
  err_msg: string;
  data: User;
};
const conf: cookieConfigOption = {
  sameSite: "strict",

  maxAge: 30 * 60 * 60 * 2,
  secure: true,
};

class Authentication {
  public static CONFIG = {
    ACCESS_TOKEN_KEY: JWT.TOKEN_COOKIE_NAME,
    USER_KEY: "user",
    COOKIE_OPTION: conf, // 2 hour expired time
  };

  /**
   * * fetch User Data From API
   */
  public static async getUserMe(): Promise<User | null> {
    const { response, error } = await Http.get<userMeResponse>(url.user.me);
    if (error || !response) return null;
    return response.data;
  }

  /**
   * * Check userAuth Status
   */
  public static async check(): Promise<boolean> {
    let isLogin = $IS_LOGIN.get();
    if (!isLogin) {
      isLogin = await Authentication.checkLocalData();
    } else {
      isLogin = true;
    }

    return isLogin;
  }

  public static async checkLocalData() {
    const accessToken = Authentication.getToken();
    if (accessToken) {
      const user: User = { ...Authentication.getUserFromCookie() };
      Authentication.setAuth(user);
      $IS_LOGIN.set(true);
      return true;
    } else {
      return false;
    }
  }

  public static async logoutUser() {
    const token = Authentication.getToken();
    await Http.post(url.auth.logout, { token });
    Cookies.delete(Authentication.CONFIG.ACCESS_TOKEN_KEY);
    window.location.href = "/login";
  }
  /**
   * * Set All User Data to state and cookie
   */
  public static setAuth(user: User) {
    const userData: User = user;

    /**
     * TODO: Set User Global State
     */
    // $USER.set(userData);
    // $TOKEN.set(Authentication.getToken());
    // $IS_LOGIN.set(true);
    $AUTH.set({
      user: userData,
      token: Authentication.getToken(),
      isLogin: true,
    });
    /**
     * TODO: Set User Global Cookie
     */
    Authentication.setUserToCokkie(userData);
  }

  /**
   * * Set All User Data to Cookie
   */
  public static setUserToCokkie(user: User) {
    /**
     * TODO: Set User To Cookie
     */
    const encryptedUser = crypto.encrypt(user);
    Cookies.set(Authentication.CONFIG.USER_KEY, encryptedUser, Authentication.CONFIG.COOKIE_OPTION);
  }

  /**
   * Get User From Cookies
   * ! Prefer don't use this in react componert
   * either better use useAuth() Hooks
   */
  public static getUserFromCookie(): User {
    const userFromCookie = Cookies.get(Authentication.CONFIG.USER_KEY);
    return crypto.decrypt(userFromCookie);
  }

  /**
   * * get Token From Cookies
   */
  public static getToken(): string {
    return Cookies.get(Authentication.CONFIG.ACCESS_TOKEN_KEY);
  }
}

export default Authentication;
