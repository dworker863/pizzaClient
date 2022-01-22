import { ICategory } from './category';

export enum ESetCategory {
  SET_CATEGORY = 'SET_CATEGORY',
}

export interface ICategoriesState {
  items: ICategory[];
}

export interface ISetCategoryAction {
  type: ESetCategory.SET_CATEGORY;
}

export type TCategoryActionTypes = ISetCategoryAction;
