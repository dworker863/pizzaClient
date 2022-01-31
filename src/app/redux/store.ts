import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import auth from './reducers/authReducer/authReducer';
import cart from './reducers/cartReducer/cartReducer';
import categories from './reducers/categoriesReducer/categoriesReducer';
import goods from './reducers/goodsReducer/goodsReducer';
import users from './reducers/usersReducer/usersReducer';

export const store = configureStore({
  reducer: {
    users,
    auth,
    goods,
    cart,
    categories,
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
