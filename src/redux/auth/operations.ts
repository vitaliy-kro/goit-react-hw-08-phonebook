import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  AuthState,
  User,
  APIError,
  AuthInformation,
  UserRefresh,
} from './operations.interface';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const setAuthHeader = (token: string) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};
export const register = createAsyncThunk<User, AuthInformation>(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/users/signup', credentials);
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue((error as APIError).message);
    }
  }
);

export const login = createAsyncThunk<User, AuthInformation>(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/users/login', credentials);
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue((error as APIError).message);
    }
  }
);

export const logout = createAsyncThunk<undefined | string, undefined>(
  'auth/logout',
  async (_, thunkAPI) => {
    try {
      await axios.post('/users/logout');
      clearAuthHeader();
    } catch (error) {
      return thunkAPI.rejectWithValue((error as APIError).message);
    }
  }
);

export const refreshUser = createAsyncThunk<
  UserRefresh,
  undefined,
  { state: { auth: AuthState } }
>('auth/refresh', async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const persistedToken = state.auth.token;

  if (!persistedToken) {
    return thunkAPI.rejectWithValue('Unable to fetch user');
  }
  try {
    setAuthHeader(persistedToken);
    const res = await axios.get('/users/current', {
      signal: thunkAPI.signal,
    });

    return res.data;
  } catch (error) {
    const result = error as APIError;

    if (result.response.status === 401) {
      clearAuthHeader();
    }

    return thunkAPI.rejectWithValue(result.message);
  }
});
