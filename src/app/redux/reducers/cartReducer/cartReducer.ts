import {
  ESetCart,
  ICartGood,
  ICartState,
  ISetCartGoodsAction,
  ISetCartTotalPriceAction,
  TCartActionTypes,
} from './ICartReducer';

const initialState: ICartState = {
  goods: [],
  totalPrice: 0,
};

const cart = (state = initialState, action: TCartActionTypes) => {
  switch (action.type) {
    case ESetCart.SET_CART_GOODS:
      return { ...state, goods: action.payload };

    case ESetCart.SET_CART_TOTALPRICE: {
      console.log(state.totalPrice);
      return { ...state, totalPrice: action.payload };
    }

    default:
      return state;
  }
};

export const setCartGoods = (goods: ICartGood[]): ISetCartGoodsAction => ({
  type: ESetCart.SET_CART_GOODS,
  payload: goods,
});

export const setCartTotalPrice = (price: number): ISetCartTotalPriceAction => ({
  type: ESetCart.SET_CART_TOTALPRICE,
  payload: price,
});

export default cart;
