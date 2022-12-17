export interface AuthState {
  user: { name: null | string; email: null | string };
  token: null | string;
  isRefreshing: boolean;
}
export interface User {
  user: { name: string | null; email: string | null };
  token: string;
  error?: { message: string };
}
export interface UserRefresh {
  name: string | null;
  email: string | null;
}
export interface APIError {
  message: string;
  response: {
    status: number;
  };
}
export interface AuthInformation {
  email: string;
  name?: string;
  password: string;
}
