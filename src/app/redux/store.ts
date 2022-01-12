import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import auth from './reducers/authReducer/auth';
import categories from './reducers/categoriesReducer/categories';
import goods from './reducers/goodsReducer/goods';
import users from './reducers/usersReducer/users';

export const store = configureStore({
  reducer: {
    users,
    auth,
    categories,
    goods,
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
