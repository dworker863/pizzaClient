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
  pizzas: [
    {
      name: 'Чеддер чикен клаб',
      description:
        'Фирменные томатный соус "Папа Джонс", куриная грудка, сыр моцарелла, сыр чеддер, томаты, соус',
      sizes: ['23 см', '30 см', '35 см', '40 см'],
      prices: ['2350 тг', '3550 тг', '4550 тг', '5750 тг'],
    },
  ],
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
      return { ...state, ...action.payload };

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
