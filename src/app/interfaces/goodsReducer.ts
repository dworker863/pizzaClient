import { IPizza } from './pizza';

export enum ESetGoods {
  SET_GOODS = 'SET_GOODS',
}

export type TGoodsType = IPizza;

export interface IGoodsState {
  pizzas: TGoodsType[];
}

export interface ISetGoodsAction {
  type: ESetGoods.SET_GOODS;
  payload?: IGoodsState;
}

export type TGoodsActionTypes = ISetGoodsAction;
