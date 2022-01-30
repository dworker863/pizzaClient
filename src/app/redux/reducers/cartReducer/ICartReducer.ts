export enum ESetCart {
  SET_CART_GOODS = 'SET_CART_GOODS',
  SET_CART_TOTALPRICE = 'SET_CART_TOTALPRICE',
}

export interface ICartGood {
  name: string;
  price: string;
  image: string;
}

export interface ICartState {
  goods?: ICartGood[];
  totalPrice?: number;
}

export interface ISetCartGoodsAction {
  type: ESetCart.SET_CART_GOODS;
  payload?: ICartGood[];
}

export interface ISetCartTotalPriceAction {
  type: ESetCart.SET_CART_TOTALPRICE;
  payload?: number;
}

export type TCartActionTypes = ISetCartGoodsAction | ISetCartTotalPriceAction;
