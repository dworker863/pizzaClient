import {
  ESetCategory,
  ICategoriesState,
  TCategoryActionTypes,
} from '../../../interfaces/categoriesReducer';

const initialState: ICategoriesState = {
  items: [
    { title: 'Пицца', name: 'pizzas' },
    { title: 'Закуски', name: 'snacks' },
    { title: 'Салаты', name: 'salads' },
    { title: 'Десерты', name: 'desserts' },
    { title: 'Напитки', name: 'drinks' },
    { title: 'Горячее', name: 'hots' },
  ],
};

const categories = (
  state = initialState,
  action: TCategoryActionTypes,
): ICategoriesState => {
  switch (action.type) {
    case ESetCategory.SET_CATEGORY:
      return { ...state };

    default:
      return state;
  }
};

export default categories;
