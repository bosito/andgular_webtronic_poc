import { createReducer, on } from '@ngrx/store';
import { login, logout } from './app-auth.actions';

export const initialState = {
  isLoggedIn: false,
  userSession: undefined,
};

export const authReducer = createReducer(
  initialState,
  on(login, (state) => {
    return {
      ...state,
      isLoggedIn: true,
    };
  }),
  on(logout, (state) => {
    return {
      ...state,
      isLoggedIn: false,
    };
  })
);
