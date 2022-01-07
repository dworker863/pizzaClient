import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import auth from './reducers/authReducer/auth';
import category from './reducers/category/category';
import pizzas from './reducers/Pizzas/pizzas';
import users from './reducers/usersReducer/users';

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
