import { ESetCart, ICartState, ISetCartAction } from './ICartReducer';

const initialState: ICartState = {
  goods: [],
};

const cart = (state = initialState, action: ISetCartAction) => {
  switch (action.type) {
    case ESetCart.SET_CART:
      return { ...state, ...action.payload };

    default:
      return state;
  }
};

export default cart;
