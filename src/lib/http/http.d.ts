export type HttpOptionsType = RequestInit | { headers: Record<string, any> };

export type AppResponse = Record<string, any>;

export type FetchError = {
  status: number;
  message: string;
};

export type AppError = {
  status: number;
  message: string;
  errors?: { message: string; location: string }[];
};

export type ApiReturn<ResponseType, ErrorType> = {
  response?: ResponseType;
  error?: ErrorType | FetchError;
};
