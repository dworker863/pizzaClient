import { login, registration } from '../../../api/api';
import { Dispatch } from 'react';
import { AnyAction, ThunkAction } from '@reduxjs/toolkit';
import {
  EAuth,
  IAuthState,
  ILoginAction,
  ILogoutAction,
  IRegisrationAction,
  TAuthActionTypes,
} from './IAuthReducer';

const initialState: IAuthState = {
  username: '',
  auth: false,
};

const auth = (
  state = initialState,
  action: TAuthActionTypes | any,
): IAuthState => {
  switch (action.type) {
    case EAuth.LOGIN:
      return { username: action.payload, auth: true };

    case EAuth.LOGOUT:
      return { username: '', auth: false };

    case EAuth.REGISTRATION:
      return { username: action.payload, auth: true };

    default:
      return state;
  }
};

export const setLogin = (user: string): ILoginAction => ({
  type: EAuth.LOGIN,
  payload: user,
});

export const setLogout = (): ILogoutAction => ({
  type: EAuth.LOGOUT,
});

export const setRegistration = (user: string): IRegisrationAction => ({
  type: EAuth.REGISTRATION,
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
