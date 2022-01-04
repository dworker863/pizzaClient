import { Dispatch } from 'react';
import { AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { fetchUsers } from '../../../api/api';
import {
  UserActionTypes,
  ESetUsers,
  IUser,
  IUsersState,
  ISetUsersAction,
  ISetUsersSuccessAction,
} from './userTypes';

const initialState: IUsersState = {
  users: [],
  loading: false,
  error: null,
};

const users = (state = initialState, action: UserActionTypes): IUsersState => {
  switch (action.type) {
    case ESetUsers.SET_USERS:
      return { ...state, loading: true };

    case ESetUsers.SET_USERS_SUCCESS:
      return { ...state, users: action.payload, loading: false };

    case ESetUsers.SET_USERS_ERROR:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};

export const setUsers = (): ISetUsersAction => ({
  type: ESetUsers.SET_USERS,
});

export const setUsersSuccess = (users: IUser[]): ISetUsersSuccessAction => ({
  type: ESetUsers.SET_USERS_SUCCESS,
  payload: users,
});

export const getUsers = (): ThunkAction<
  void,
  IUsersState,
  unknown,
  AnyAction
> => {
  return (dispatch: Dispatch<any>): void => {
    dispatch(setUsers());
    fetchUsers()
      .then((users: IUser[]): void => {
        dispatch(setUsersSuccess(users));
      })
      .catch((error): void => console.log(error));
  };
};

export default users;
