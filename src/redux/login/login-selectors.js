// import { createSelector } from '@reduxjs/toolkit';

export const getIsLogged = state => state.login.isLogged;

export const getUserName = state => state.login.user.name;
