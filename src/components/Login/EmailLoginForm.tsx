import type { FormEvent } from 'react';
import { useState } from 'react';
import Cookies from '../../lib/helpers/cookie';
import JWT from '../../lib/helpers/jwt';
import Http from '../../lib/http';
import url from '../../lib/http/url';

interface loginResponse {
  auth_id: number;
  access_token: string;
  valid_until: string;
  created_at: string;
  updated_at: string;
}

export function EmailLoginForm() {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState('');

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    const { response, error } = await Http.post<loginResponse>(
      url.auth.signin,
      {
        username,
        password,
      },
    );

    // Log the user in and reload the page
    if (response?.access_token) {
      Cookies.set(JWT.TOKEN_COOKIE_NAME, response.access_token, {
        maxAge: 30,
        domain: import.meta.env.DEV ? 'localhost' : '.hooksy.link',
      });
      window.location.href = '/admin';
      return;
    }

    // @todo use proper types
    // if ((error as any).type === 'user_not_verified') {
    //   window.location.href = `/verification-pending?email=${encodeURIComponent(
    //     email,
    //   )}`;
    //   return;
    // }

    setIsLoading(false);
    setError(error?.message || 'Something went wrong. Please try again later.');
  };

  return (
    <form className="flex w-full flex-col gap-2" onSubmit={handleFormSubmit}>
      <label htmlFor="name" className="sr-only">
        Username
      </label>
      <div className="relative h-full w-full text-gray-800 md:w-max">
        <p className="absolute left-3 top-[7px] z-10 w-min text-lg">
          hooksy.link/
        </p>
        <input
          type="text"
          className="flex w-full rounded-lg border border-gray-300 px-3 py-2 pl-[6.75rem] outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1 md:w-[318px]"
          value={username}
          name="username"
          autoComplete="username"
          min={3}
          max={50}
          placeholder="your-username"
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>
      <label htmlFor="password" className="sr-only">
        Password
      </label>
      <input
        name="password"
        type="password"
        autoComplete="current-password"
        required
        className="block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(String(e.target.value))}
      />

      {/* <p className="mb-3 mt-2 text-sm text-gray-500">
        <a
          href="/forgot-password"
          className="text-blue-800 hover:text-blue-600"
        >
          Reset your password?
        </a>
      </p> */}

      {error && (
        <p className="text-secondary rounded-md bg-red-100 p-2">{error}</p>
      )}

      <button
        type="submit"
        disabled={isLoading}
        className="inline-flex w-full items-center justify-center rounded-lg bg-black p-2 py-3 text-sm font-medium text-white outline-none focus:ring-2 focus:ring-black focus:ring-offset-1 disabled:bg-gray-400"
      >
        {isLoading ? 'Please wait...' : 'Continue'}
      </button>
    </form>
  );
}
