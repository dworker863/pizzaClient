import { fetchGoods } from '../../../api/api';
import { Dispatch } from 'react';
import { AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';
import {
  ESetGoods,
  IGoodsState,
  ISetGoodsAction,
  TGoodsActionTypes,
} from './IGoodsReducer';

const initialState: IGoodsState = {
  pizzas: [],
  // snacks: [],
  // salads: [],
  // desserts: [],
  // drinks: [],
  // hots: [],
};

const goods = (
  state = initialState,
  action: TGoodsActionTypes,
): IGoodsState => {
  switch (action.type) {
    case ESetGoods.SET_GOODS:
      const x: IGoodsState = { ...state, ...action.payload };
      console.log(state);

      return x;

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
