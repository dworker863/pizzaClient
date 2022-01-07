import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import auth from './reducers/authReducer/auth';
import category from './reducers/category/category';
import users from './reducers/usersReducer/users';

export const store = configureStore({
  reducer: {
    auth,
    users,
    category,
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
