import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { auth } from './redux/reducers/authReducer/auth';
import users from './redux/reducers/usersReducer/users';

export const store = configureStore({
  reducer: {
    users,
    auth,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
