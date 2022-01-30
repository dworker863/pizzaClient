import { IGood } from './IGood';

export enum ESetGoods {
  SET_GOODS = 'SET_GOODS',
}

export interface IGoodsState {
  pizzas: IGood[];
  // snacks: IGood[];
  // salads: IGood[];
  // desserts: IGood[];
  // drinks: IGood[];
  // hots: IGood[];
}

export interface ISetGoodsAction {
  type: ESetGoods.SET_GOODS;
  payload: IGoodsState;
}

export type TGoodsActionTypes = ISetGoodsAction;
