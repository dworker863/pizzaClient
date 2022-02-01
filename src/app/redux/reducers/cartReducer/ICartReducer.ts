export enum ECart {
  SET_CART_GOODS = 'SET_CART_GOODS',
  SET_CART_TOTALPRICE = 'SET_CART_TOTALPRICE',
  SET_CART_GOODS_COUNT = 'SET_CART_GOODS_COUNT',
}

export interface ICartGood {
  name: string;
  price: string;
  image: string;
  goodsCount: number;
}

export interface ICartState {
  goods: ICartGood[];
  totalPrice: number;
}

export interface ISetCartGoodsAction {
  type: ECart.SET_CART_GOODS;
  payload: ICartGood[];
}

export interface ISetCartTotalPriceAction {
  type: ECart.SET_CART_TOTALPRICE;
  payload: number;
}

export interface ISetCartGoodsCountAction {
  type: ECart.SET_CART_GOODS_COUNT;
  payload: ICartGood;
}

export type TCartActionTypes =
  | ISetCartGoodsAction
  | ISetCartTotalPriceAction
  | ISetCartGoodsCountAction;
