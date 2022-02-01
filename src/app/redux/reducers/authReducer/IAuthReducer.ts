export enum EAuth {
  LOGIN = 'LOGIN',
  LOGOUT = 'LOGOUT',
  REGISTRATION = 'REGISTRATION',
}

export interface IAuthState {
  username: string;
  auth: boolean;
}

export interface ILoginAction {
  type: EAuth.LOGIN;
  payload: string;
}

export interface ILogoutAction {
  type: EAuth.LOGOUT;
}

export interface IRegisrationAction {
  type: EAuth.REGISTRATION;
  payload: string;
}

export type TAuthActionTypes =
  | ILoginAction
  | ILogoutAction
  | IRegisrationAction;
