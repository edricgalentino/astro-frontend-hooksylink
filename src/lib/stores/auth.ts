import { atom } from 'nanostores';
import type { User } from '../../modules/User/user';

export type Auth = {
  user: User;
  token: string;
  isLogin: boolean;
};

export const $USER = atom<User | undefined>(undefined);
export const $TOKEN = atom<string | undefined>(undefined);
export const $IS_LOGIN = atom<boolean>(false);

export const $AUTH = atom<Auth>({
  user: $USER.get() as User,
  token: $TOKEN.get() as string,
  isLogin: $IS_LOGIN.get(),
});
