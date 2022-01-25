export enum ESetAuth {
  LOGIN = 'LOGIN',
  LOGOUT = 'LOGOUT',
  REGISTRATION = 'REGISTRATION',
}

export interface IAuthState {
  username: string;
  auth: boolean;
}

export interface ILoginAction {
  type: ESetAuth.LOGIN;
  payload: string;
}

export interface ILogoutAction {
  type: ESetAuth.LOGOUT;
}

export interface IRegisrationAction {
  type: ESetAuth.REGISTRATION;
  payload: string;
}

export type TAuthActionTypes =
  | ILoginAction
  | ILogoutAction
  | IRegisrationAction;
