import {
  ECart,
  ICartGood,
  ICartState,
  ISetCartGoodsAction,
  ISetCartGoodsCountAction,
  ISetCartTotalPriceAction,
  TCartActionTypes,
} from './ICartReducer';

const initialState: ICartState = {
  goods: [],
  totalPrice: 0,
};

const cart = (
  state = initialState,
  action: TCartActionTypes | any,
): ICartState => {
  switch (action.type) {
    case ECart.SET_CART_GOODS:
      return { ...state, goods: action.payload };

    case ECart.SET_CART_GOODS_COUNT: {
      const customGoods = [...state.goods];
      return {
        ...state,
        goods: [
          ...customGoods.map((good) =>
            good.name === action.payload.name ? action.payload : good,
          ),
        ],
      };
    }

    case ECart.SET_CART_TOTALPRICE: {
      return { ...state, totalPrice: action.payload };
    }

    default:
      return state;
  }
};

export const setCartGoods = (goods: ICartGood[]): ISetCartGoodsAction => ({
  type: ECart.SET_CART_GOODS,
  payload: goods,
});

export const setCartGoodsCount = (
  good: ICartGood,
  goodsCount: number,
): ISetCartGoodsCountAction => ({
  type: ECart.SET_CART_GOODS_COUNT,
  payload: { ...good, goodsCount },
});

export const setCartTotalPrice = (price: number): ISetCartTotalPriceAction => ({
  type: ECart.SET_CART_TOTALPRICE,
  payload: price,
});

export default cart;
