import fp from '@fingerprintjs/fingerprintjs';
import type { ApiReturn, AppError, AppResponse, HttpOptionsType } from './http';
import Cookies from '../helpers/cookie';
import JWT from '../helpers/jwt';
import Auth from '../helpers/auth';

class HttpCall {
  public async get<ResponseType = AppResponse, ErrorType = AppError>(
    url: string,
    queryParams?: Record<string, any>,
    options?: HttpOptionsType,
  ): Promise<ApiReturn<ResponseType, ErrorType>> {
    const searchParams = new URLSearchParams(queryParams).toString();
    const queryUrl = searchParams ? `${url}?${searchParams}` : url;

    return this.httpCall<ResponseType, ErrorType>(queryUrl, {
      credentials: 'include',
      method: 'GET',
      ...options,
    });
  }

  public async post<ResponseType = AppResponse, ErrorType = AppError>(
    url: string,
    body: Record<string, any>,
    options?: HttpOptionsType,
  ): Promise<ApiReturn<ResponseType, ErrorType>> {
    return this.httpCall<ResponseType, ErrorType>(url, {
      ...options,
      method: 'POST',
      body: JSON.stringify(body),
    });
  }

  public async patch<ResponseType = AppResponse, ErrorType = AppError>(
    url: string,
    body: Record<string, any>,
    options?: HttpOptionsType,
  ): Promise<ApiReturn<ResponseType, ErrorType>> {
    return this.httpCall<ResponseType, ErrorType>(url, {
      ...options,
      method: 'PATCH',
      body: JSON.stringify(body),
    });
  }

  public async put<ResponseType = AppResponse, ErrorType = AppError>(
    url: string,
    body: Record<string, any>,
    options?: HttpOptionsType,
  ): Promise<ApiReturn<ResponseType, ErrorType>> {
    return this.httpCall<ResponseType, ErrorType>(url, {
      ...options,
      method: 'PUT',
      body: JSON.stringify(body),
    });
  }

  public async delete<ResponseType = AppResponse, ErrorType = AppError>(
    url: string,
    options?: HttpOptionsType,
  ): Promise<ApiReturn<ResponseType, ErrorType>> {
    return this.httpCall<ResponseType, ErrorType>(url, {
      ...options,
      method: 'DELETE',
    });
  }

  /**
   * Wrapper around fetch to make it easy to handle errors
   *
   * @param url
   * @param options
   */
  private async httpCall<ResponseType = AppResponse, ErrorType = AppError>(
    url: string,
    options?: HttpOptionsType,
  ): Promise<ApiReturn<ResponseType, ErrorType>> {
    try {
      const fingerprintPromise = await fp.load();
      const fingerprint = await fingerprintPromise.get();

      const response = await fetch(url, {
        credentials: 'include',
        ...options,
        headers: new Headers({
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${Cookies.get(JWT.TOKEN_COOKIE_NAME)}`,
          fp: fingerprint.visitorId,
          ...(options?.headers ?? {}),
        }),
      });

      // @ts-ignore
      const doesAcceptHtml = options?.headers?.['Accept'] === 'text/html';

      const data = doesAcceptHtml
        ? await response.text()
        : await response.json();

      if (response.ok) {
        return {
          response: data as ResponseType,
          error: undefined,
        };
      }

      // Logout user if token is invalid
      if (data.status === 401) {
        Auth.logoutUser();
        return { response: undefined, error: data as ErrorType };
      }

      if (data.status === 403) {
        // window.location.href = '/account'; // @fixme redirect option should be configurable
        return { response: undefined, error: data as ErrorType };
      }

      return {
        response: undefined,
        error: data as ErrorType,
      };
    } catch (error: any) {
      return {
        response: undefined,
        error: {
          status: 0,
          message: error.message,
        },
      };
    }
  }
}

const Http = new HttpCall();
export default Http;
