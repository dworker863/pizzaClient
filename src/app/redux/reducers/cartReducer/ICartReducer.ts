export enum ESetCart {
  SET_CART = 'SET_CART',
}

export interface ICartState {
  goods: string[];
}

export interface ISetCartAction {
  type: ESetCart.SET_CART;
  payload?: string[];
}

export type TCartActionTypes = ISetCartAction;
