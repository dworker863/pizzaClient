import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import auth from './redux/reducers/authReducer/auth';
import category from './redux/reducers/category/category';
import pizzas from './redux/reducers/Pizza/pizza';
import users from './redux/reducers/usersReducer/users';

export const store = configureStore({
  reducer: {
    users,
    auth,
    category,
    pizzas,
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
