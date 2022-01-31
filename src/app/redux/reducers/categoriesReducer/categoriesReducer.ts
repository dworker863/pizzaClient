import { fetchCategories } from './../../../api/api';
import { AnyAction, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { ICategory } from '../../../components/Sections/Category/ICategory';
import { ECategories, ISetCategoriesAction } from './ICategoriesReducer';

const initialState: ICategory[] = [];

const categories = (
  state = initialState,
  action: ISetCategoriesAction | any,
): ICategory[] => {
  switch (action.type) {
    case ECategories.SET_CATEGORIES:
      return [...state, ...action.payload];

    default:
      return state;
  }
};

export const setCategories = (
  categories: ICategory[],
): ISetCategoriesAction => ({
  type: ECategories.SET_CATEGORIES,
  payload: categories,
});

export const getCategories =
  (): ThunkAction<void, ICategory[], unknown, AnyAction> =>
  (dispatch: Dispatch<any>): void => {
    fetchCategories().then((categories) => dispatch(setCategories(categories)));
  };

export default categories;
