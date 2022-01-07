import { login, registration } from './../../../api/api';
import { Dispatch } from 'react';
import { AnyAction, ThunkAction } from '@reduxjs/toolkit';
import {
  ESetAuth,
  IAuthState,
  ILogin,
  ILogout,
  IRegisration,
  TAuthActionTypes,
} from '../../../interfaces/authReducer';

const initialState: IAuthState = {
  username: '',
  auth: false,
};

const auth = (state = initialState, action: TAuthActionTypes): IAuthState => {
  switch (action.type) {
    case ESetAuth.LOGIN:
      return { username: action.payload, auth: true };

    case ESetAuth.LOGOUT:
      return { username: '', auth: false };

    case ESetAuth.REGISTRATION:
      return { username: action.payload, auth: true };

    default:
      return state;
  }
};

export const setLogin = (user: string): ILogin => ({
  type: ESetAuth.LOGIN,
  payload: user,
});

export const setLogout = (): ILogout => ({
  type: ESetAuth.LOGOUT,
});

export const setRegistration = (user: string): IRegisration => ({
  type: ESetAuth.REGISTRATION,
  payload: user,
});

export const getRegistration =
  (
    name: string,
    tel: string,
    email: string,
    password: string,
    role: string,
  ): ThunkAction<void, IAuthState, unknown, AnyAction> =>
  (dispatch: Dispatch<any>): void => {
    registration(name, tel, email, password, role).then((user) => {
      dispatch(setRegistration(user.name));
    });
  };

export const getLogin =
  (
    tel: string,
    password: string,
  ): ThunkAction<void, IAuthState, unknown, AnyAction> =>
  (dispatch: Dispatch<any>): void => {
    login(tel, password).then((user) => {
      dispatch(setLogin(user.name));
    });
  };

export const getLogout =
  (): ThunkAction<void, IAuthState, unknown, AnyAction> =>
  (dispatch: Dispatch<any>): void => {
    localStorage.setItem('token', '');
    dispatch(setLogout());
    console.log('sdfs');
  };

export default auth;
