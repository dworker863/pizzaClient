import { ICategory } from '../../../components/Sections/Category/ICategory';

export enum ECategories {
  SET_CATEGORIES = 'SET_CATEGORIES',
}

export interface ISetCategoriesAction {
  type: ECategories.SET_CATEGORIES;
  payload: ICategory[];
}

export type TCategoriesActionTypes = ISetCategoriesAction;
