import { type FormEvent, useState } from "react";
import Http from "../../lib/http";
import url from "../../lib/http/url";
import Cookies from "../../lib/helpers/cookie";
import JWT from "../../lib/helpers/jwt";
import type { User } from "../../modules/User/user";
import PasswordIndicator from "./PasswordIndicator";

interface signupResponse {
  access_token: string;
  valid_until: string;
  user: User;
  auth_id: number;
  created_at: string;
  updated_at: string;
}

export function EmailSignupForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [passwordIsVisible, setPasswordIsVisible] = useState(false);

  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsLoading(true);
    setError("");

    const { response, error } = await Http.post<signupResponse>(url.auth.signup, {
      email,
      password,
      username,
    });
    // Log the user in and reload the page
    if (response?.access_token) {
      Cookies.set(JWT.TOKEN_COOKIE_NAME, response.access_token, {
        maxAge: 30 * 24 * 60 * 60,
        domain: import.meta.env.DEV ? "localhost" : ".hooksy.link",
      });
      window.location.href = "/admin";
      return;
    }

    setIsLoading(false);
    setError(error?.message || "Something went wrong. Please try again later.");
  };

  return (
    <form className="flex w-full flex-col gap-2" onSubmit={onSubmit}>
      <label htmlFor="name" className="sr-only">
        Username
      </label>
      <div className="relative h-full w-full text-gray-800 md:w-max">
        <p className="absolute left-3 top-[7px] z-10 w-min text-lg">hooksy.link/</p>
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
      <label htmlFor="email" className="sr-only">
        Email address
      </label>
      <input
        name="email"
        type="email"
        autoComplete="email"
        required
        className="block w-full rounded-lg border border-gray-300 px-3 py-2  outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1"
        placeholder="Email Address"
        value={email}
        onChange={(e) => setEmail(String(e.target.value))}
      />
      <label htmlFor="password" className="sr-only">
        Password
      </label>
      <div className="relative">
        <input
          name="password"
          type={!passwordIsVisible ? "password" : "text"}
          autoComplete="current-password"
          min={6}
          max={50}
          required
          className="block w-full rounded-lg border border-gray-300 px-3 py-2 outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(String(e.target.value))}
        />
        <PasswordIndicator passwordIsVisible={passwordIsVisible} setPasswordIsVisible={setPasswordIsVisible} />
      </div>

      {error && <p className="rounded-lg bg-red-100 p-2 text-red-700">{error}.</p>}

      <button
        type="submit"
        disabled={isLoading}
        className="inline-flex w-full items-center justify-center rounded-lg bg-black p-2 py-3 text-sm font-medium text-white outline-none focus:ring-2 focus:ring-black focus:ring-offset-1 disabled:bg-gray-400"
      >
        {isLoading ? "Please wait..." : "Sign Up For Free"}
      </button>
    </form>
  );
}
