import { IUser } from './user';

export enum ESetUsers {
  SET_USERS = 'SET_USERS',
  SET_USERS_SUCCESS = 'SET_USERS_SUCCESS',
  SET_USERS_ERROR = 'SET_USERS_ERROR',
}

export interface IUsersState {
  users: any[];
  loading: boolean;
  error: null | string;
}

export interface ISetUsersAction {
  type: ESetUsers.SET_USERS;
}

export interface ISetUsersSuccessAction {
  type: ESetUsers.SET_USERS_SUCCESS;
  payload: IUser[];
}

export interface ISetUsersErrorAction {
  type: ESetUsers.SET_USERS_ERROR;
  payload: string;
}

export type UserActionTypes =
  | ISetUsersAction
  | ISetUsersSuccessAction
  | ISetUsersErrorAction;
