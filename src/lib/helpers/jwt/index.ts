class JWT {
  static TOKEN_COOKIE_NAME = '__hooksylink_jt__';
  static parse<T>(token: string): T {
    const base64Token = token.split('.');
    const bodyToken = base64Token[1];
    const body = window.atob(bodyToken);

    return JSON.parse(body) as T;
  }
}

export default JWT;
