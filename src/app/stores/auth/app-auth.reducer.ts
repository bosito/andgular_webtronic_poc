import { createReducer, on } from '@ngrx/store';
import { login, logout } from './app-auth.actions';

export const initialState = {
  isLoggedIn: false,
  username: '',
};

export const authReducer = createReducer(
  initialState,
  on(login, (state) => state),
  on(logout, (state) => state)
);
