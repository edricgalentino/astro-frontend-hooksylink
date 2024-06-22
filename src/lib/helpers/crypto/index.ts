import { AES, enc, mode, pad } from 'crypto-js';

class Crypto {
  private static CONFIG = {
    SECRET: import.meta.env.ENCRYPTION_KEY,
    IV: import.meta.env.ENCRYPTION_IV,
  };
  public static encrypt(data: object | string | any[] | number | boolean) {
    const encrypted = AES.encrypt(JSON.stringify(data), Crypto.CONFIG.SECRET, {
      mode: mode.ECB,
      padding: pad.Pkcs7,
    });
    return encodeURIComponent(encrypted.toString());
  }

  public static decrypt(data: string) {
    if (!data) return null;
    const decrypted = AES.decrypt(
      decodeURIComponent(data),
      Crypto.CONFIG.SECRET,
      {
        mode: mode.ECB,
        padding: pad.Pkcs7,
      },
    );
    return JSON.parse(decrypted.toString(enc.Utf8));
  }
}

export default Crypto;
