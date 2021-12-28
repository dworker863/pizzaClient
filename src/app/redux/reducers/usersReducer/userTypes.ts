export enum EFetchUsers {
  FETCH_USERS = 'FETCH_USERS',
  FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
  FETCH_USERS_ERROR = 'FETCH_USERS_ERROR',
}

export interface IUserState {
  users: any[];
  loading: boolean;
  error: null | string;
}

interface IFetchUserAction {
  type: EFetchUsers.FETCH_USERS;
}

interface IFetchUserSuccessAction {
  type: EFetchUsers.FETCH_USERS_SUCCESS;
  payload: any[];
}

interface IFetchUserErrorAction {
  type: EFetchUsers.FETCH_USERS_ERROR;
  payload: string;
}

export type ActionTypes =
  | IFetchUserAction
  | IFetchUserSuccessAction
  | IFetchUserErrorAction;
