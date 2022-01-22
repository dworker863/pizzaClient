import { fetchGoods } from './../../../api/api';
import { Dispatch } from 'react';
import { AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { IPizza } from '../../../interfaces/pizza';

enum ESetGoods {
  SET_GOODS = 'SET_GOODS',
}

type TGoodsType = IPizza;

export interface IGoodsState {
  pizzas: TGoodsType[];
}

interface ISetGoodsAction {
  type: ESetGoods.SET_GOODS;
  payload?: any;
}

type TGoodsActionTypes = ISetGoodsAction;

const initialState: IGoodsState = {
  pizzas: [],
};

const goods = (
  state = initialState,
  action: TGoodsActionTypes,
): IGoodsState => {
  switch (action.type) {
    case ESetGoods.SET_GOODS:
      return { ...action.payload };

    default:
      return state;
  }
};

export const setGoods = (goods: IGoodsState): ISetGoodsAction => ({
  type: ESetGoods.SET_GOODS,
  payload: goods,
});

export const getGoods =
  (): ThunkAction<void, IGoodsState, unknown, AnyAction> =>
  (dispatch: Dispatch<any>): void => {
    fetchGoods().then((goods: IGoodsState): void => {
      dispatch(setGoods(goods));
    });
  };

export default goods;
