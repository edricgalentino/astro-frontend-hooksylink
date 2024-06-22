export type jwt = string;

export type temporaryJWTBodyType = {
  id: string;
  email: string;
  username: string;
  name: string;
  plan: 'FREE' | 'STARTER' | 'PRO';
  is_onboarded: boolean;
  exp: number;
};
