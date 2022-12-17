import { IState } from '../state.interface';

export const selectIsLoggedIn = (state: IState) => state.auth.token;

export const selectUser = (state: IState) => state.auth.user;

export const selectIsRefreshing = (state: IState) => state.auth.isRefreshing;
