import {
  ESetCart,
  ICartState,
  ISetCartAction,
  TCartActionTypes,
} from './ICartReducer';

const initialState: ICartState = {
  goods: [],
};

const cart = (state = initialState, action: TCartActionTypes) => {
  switch (action.type) {
    case ESetCart.SET_CART:
      return { ...state, ...action.payload };

    default:
      return state;
  }
};

export const setCart = (goods: ICartState): ISetCartAction => ({
  type: ESetCart.SET_CART,
  payload: goods,
});

export default cart;
