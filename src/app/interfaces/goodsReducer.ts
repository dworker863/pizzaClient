import { ISalad } from './salad';
import { IPizza } from './pizza';
import { ISnack } from './snack';
import { IDessert } from './dessert';
// import { IDrink } from './drink';
import { IHot } from './hot';

export enum ESetGoods {
  SET_GOODS = 'SET_GOODS',
}

export type TGoodsType = IPizza | ISnack | ISalad | IDessert | IHot;

export interface IGoodsState {
  pizzas: TGoodsType[];
  snacks: TGoodsType[];
  salads: TGoodsType[];
  desserts: TGoodsType[];
  // drinks: TGoodsType[];
  hots: TGoodsType[];
}

export interface ISetGoodsAction {
  type: ESetGoods.SET_GOODS;
  payload?: IGoodsState;
}

export type TGoodsActionTypes = ISetGoodsAction;
