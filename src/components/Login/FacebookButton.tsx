import { useEffect, useState } from 'react';
import Http from '../../lib/http';
import url from '../../lib/http/url';
import Cookies from '../../lib/helpers/cookie';
import JWT from '../../lib/helpers/jwt';
import { Spinner } from '../Common/Icons/Spinner';
import { FacebookIcon } from '../Common/Icons/FacebookIcon';

const FACEBOOK_REDIRECT_AT = 'facebookRedirectAt';
const FACEBOOK_LAST_PAGE = 'facebookLastPage';

export function FacebookButton() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    const state = urlParams.get('state');
    const provider = urlParams.get('provider');

    if (!code || !state || provider !== 'facebook') return;

    setIsLoading(true);
    Http.get<{ accessToken: string; refreshToken: string }>(
      `${url.oauth.facebook.callback}${window.location.search}`,
    )
      .then(({ response, error }) => {
        if (!response?.accessToken) {
          setError(error?.message || 'Something went wrong.');
          setIsLoading(false);

          return;
        }

        let redirectUrl = '/admin';
        const facebookRedirectAt = localStorage.getItem(FACEBOOK_REDIRECT_AT);
        const lastPageBeforeFacebook = localStorage.getItem(FACEBOOK_LAST_PAGE);

        // If the social redirect is there and less than 30 seconds old
        // redirect to the page that user was on before they clicked the github login button
        if (facebookRedirectAt && lastPageBeforeFacebook) {
          const socialRedirectAtTime = parseInt(facebookRedirectAt, 10);
          const now = Date.now();
          const timeSinceRedirect = now - socialRedirectAtTime;

          if (timeSinceRedirect < 30 * 1000) {
            redirectUrl = lastPageBeforeFacebook;
          }
        }

        const authRedirectUrl = localStorage.getItem('authRedirect');
        if (authRedirectUrl) {
          localStorage.removeItem('authRedirect');
          redirectUrl = authRedirectUrl;
        }

        localStorage.removeItem(FACEBOOK_REDIRECT_AT);
        localStorage.removeItem(FACEBOOK_LAST_PAGE);
        Cookies.set(JWT.TOKEN_COOKIE_NAME, response.accessToken, {
          maxAge: 30,
          domain: import.meta.env.DEV ? 'localhost' : '.hooksy.link',
        });
        window.location.href = redirectUrl;
      })
      .catch((err) => {
        setError('Something went wrong. Please try again later.');
        setIsLoading(false);
      });
  }, []);

  const handleClick = () => {
    setIsLoading(true);
    Http.get<{ loginUrl: string }>(url.oauth.facebook.login)
      .then(({ response, error }) => {
        if (!response?.loginUrl) {
          setError(error?.message || 'Something went wrong.');
          setIsLoading(false);

          return;
        }

        // For non authentication pages, we want to redirect back to the page
        // the user was on before they clicked the social login button
        if (!['/login', '/signup'].includes(window.location.pathname)) {
          const pagePath = window.location.pathname;

          localStorage.setItem(FACEBOOK_REDIRECT_AT, Date.now().toString());
          localStorage.setItem(FACEBOOK_LAST_PAGE, pagePath);
        }

        window.location.href = response.loginUrl;
      })
      .catch((err) => {
        setError('Something went wrong. Please try again later.');
        setIsLoading(false);
      });
  };

  return (
    <>
      <button
        className="inline-flex h-10 w-full items-center justify-center gap-2 rounded border border-slate-300 bg-white p-2 text-sm font-medium text-black outline-none hover:bg-slate-100 focus:ring-2 focus:ring-[#333] focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-60"
        disabled={isLoading}
        onClick={handleClick}
      >
        {isLoading ? (
          <Spinner className={'h-[18px] w-[18px]'} isDualRing={false} />
        ) : (
          <FacebookIcon className={'h-[18px] w-[18px]'} />
        )}
        Continue with Facebook
      </button>
      {error && (
        <p className="mb-2 mt-1 text-sm font-medium text-red-600">{error}</p>
      )}
    </>
  );
}
