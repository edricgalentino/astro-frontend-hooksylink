import { useEffect, useState } from "react";
import url from "../../lib/http/url";
import Http from "../../lib/http";
import Cookies from "../../lib/helpers/cookie";
import JWT from "../../lib/helpers/jwt";
import { GoogleIcon } from "../Common/Icons/GoogleIcon";
import { Spinner } from "../Common/Icons/Spinner";

const GOOGLE_REDIRECT_AT = "googleRedirectAt";
const GOOGLE_LAST_PAGE = "googleLastPage";

export function GoogleButton() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");
    const state = urlParams.get("state");
    const provider = urlParams.get("provider");

    if (!code || !state || provider !== "google") return;

    setIsLoading(true);
    Http.get<{ accessToken: string; refreshToken: string }>(`${url.oauth.google.callback}${window.location.search}`)
      .then(({ response, error }) => {
        if (!response?.accessToken) {
          setError(error?.message || "Something went wrong.");
          setIsLoading(false);

          return;
        }

        let redirectUrl = "/admin";
        Cookies.set(JWT.TOKEN_COOKIE_NAME, response.accessToken, {
          maxAge: 30 * 24 * 60 * 60,
          domain: import.meta.env.DEV ? "localhost" : ".hooksy.link",
        });

        const googleRedirectAt = localStorage.getItem(GOOGLE_REDIRECT_AT);
        const lastPageBeforeGoogle = localStorage.getItem(GOOGLE_LAST_PAGE);

        // If the social redirect is there and less than 30 seconds old
        // redirect to the page that user was on before they clicked the github login button
        if (googleRedirectAt && lastPageBeforeGoogle) {
          const socialRedirectAtTime = parseInt(googleRedirectAt, 10);
          const now = Date.now();
          const timeSinceRedirect = now - socialRedirectAtTime;

          if (timeSinceRedirect < 30 * 1000) {
            redirectUrl = lastPageBeforeGoogle;
          }
        }

        const authRedirectUrl = localStorage.getItem("authRedirect");
        if (authRedirectUrl) {
          localStorage.removeItem("authRedirect");
          redirectUrl = authRedirectUrl;
        }

        localStorage.removeItem(GOOGLE_REDIRECT_AT);
        localStorage.removeItem(GOOGLE_LAST_PAGE);
        window.location.href = redirectUrl;
      })
      .catch((err) => {
        setError("Something went wrong. Please try again later.");
        setIsLoading(false);
      });
  }, []);

  const handleClick = () => {
    setIsLoading(true);
    Http.get<{ loginUrl: string }>(url.oauth.google.login)
      .then(({ response, error }) => {
        if (!response?.loginUrl) {
          setError(error?.message || "Something went wrong.");
          setIsLoading(false);

          return;
        }

        // For non authentication pages, we want to redirect back to the page
        // the user was on before they clicked the social login button
        if (!["/login", "/signup"].includes(window.location.pathname)) {
          const pagePath = window.location.pathname;

          localStorage.setItem(GOOGLE_REDIRECT_AT, Date.now().toString());
          localStorage.setItem(GOOGLE_LAST_PAGE, pagePath);
        }

        window.location.href = response.loginUrl;
      })
      .catch((err) => {
        setError("Something went wrong. Please try again later.");
        setIsLoading(false);
      });
  };

  return (
    <>
      <button
        className="inline-flex h-10 w-full items-center justify-center gap-2 rounded border border-slate-300 bg-white p-2 text-sm font-medium text-black outline-none hover:bg-slate-100 focus:ring-2 focus:ring-[33] focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-60"
        disabled={isLoading}
        onClick={handleClick}
      >
        {isLoading ? <Spinner className={"h-[18px] w-[18px]"} isDualRing={false} /> : <GoogleIcon className={"h-[18px] w-[18px]"} />}
        Continue with Google
      </button>
      {error && <p className="mb-2 mt-1 text-sm font-medium text-red-600">{error}</p>}
    </>
  );
}
