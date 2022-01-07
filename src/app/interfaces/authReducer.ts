export enum ESetAuth {
  LOGIN = 'LOGIN',
  LOGOUT = 'LOGOUT',
  REGISTRATION = 'REGISTRATION',
}

export interface IAuthState {
  username: string;
  auth: boolean;
}

export interface ILogin {
  type: ESetAuth.LOGIN;
  payload: string;
}

export interface ILogout {
  type: ESetAuth.LOGOUT;
}

export interface IRegisration {
  type: ESetAuth.REGISTRATION;
  payload: string;
}

export type TAuthActionTypes = ILogin | ILogout | IRegisration;
