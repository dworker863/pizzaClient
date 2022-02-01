import { fetchGoods } from '../../../api/api';
import { Dispatch } from 'react';
import { AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';
import {
  EGoods,
  IGoodsState,
  ISetGoodsAction,
  TGoodsActionTypes,
} from './IGoodsReducer';

const initialState: IGoodsState = {
  pizzas: [],
  snacks: [],
  salads: [],
  desserts: [],
  drinks: [],
  hots: [],
};

const goods = (
  state = initialState,
  action: TGoodsActionTypes | any,
): IGoodsState => {
  switch (action.type) {
    case EGoods.SET_GOODS:
      return { ...state, ...action.payload };

    default:
      return state;
  }
};

export const setGoods = (goods: IGoodsState): ISetGoodsAction => ({
  type: EGoods.SET_GOODS,
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
