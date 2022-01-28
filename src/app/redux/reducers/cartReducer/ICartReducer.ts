export enum ESetCart {
  SET_CART = 'SET_CART',
}

export interface ICartGood {
  name: string;
  price: string;
}

export interface ICartState {
  goods: ICartGood[];
}

export interface ISetCartAction {
  type: ESetCart.SET_CART;
  payload?: ICartState;
}

export type TCartActionTypes = ISetCartAction;
