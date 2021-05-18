import { createAction } from '@reduxjs/toolkit';

export const registerRequest = createAction('login/registerRequest');
export const registerSuccess = createAction('login/registerSuccess');
export const registerError = createAction('login/registerError');

export const loginRequest = createAction('login/loginRequest');
export const loginSuccess = createAction('login/loginSuccess');
export const loginError = createAction('login/loginError');

export const logoutRequest = createAction('login/logoutRequest');
export const logoutSuccess = createAction('login/logoutSuccess');
export const logoutError = createAction('login/logoutError');

export const getCurrentUserRequest = createAction(
  'login/getCurrentUserRequest',
);
export const getCurrentUserSuccess = createAction(
  'login/getCurrentUserSuccess',
);
export const getCurrentUserError = createAction('login/getCurrentUserError');
