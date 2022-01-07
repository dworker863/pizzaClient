import {
  ESetCategory,
  ICategoryState,
  ISetCategory,
} from '../../../interfaces/categoryReducer';

type TCategoryActionTypes = ISetCategory;

const initialState: ICategoryState = {
  category: ['Пицца', 'Закуски', 'Салаты', 'Десерты', 'Напитки', 'Горячее'],
};

const category = (
  state = initialState,
  action: TCategoryActionTypes,
): ICategoryState => {
  switch (action.type) {
    case ESetCategory.SET_CATEGORY:
      return { ...state };

    default:
      return state;
  }
};

export default category;
