import { ActionTypes, EFetchUsers, IUserState } from './userTypes';

const initialState: IUserState = {
  users: [],
  loading: false,
  error: null,
};

const users = (state = initialState, action: ActionTypes): IUserState => {
  switch (action.type) {
    case EFetchUsers.FETCH_USERS:
      return { ...state, loading: true };

    case EFetchUsers.FETCH_USERS_SUCCESS:
      return { ...state, users: action.payload };

    case EFetchUsers.FETCH_USERS_ERROR:
      return { ...state, error: action.payload };

    default:
      return state;
  }
};

export default users;
