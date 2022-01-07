export enum ESetCategory {
  SET_CATEGORY = 'SET_CATEGORY',
}

export interface ICategoryState {
  category: string[];
}

export interface ISetCategory {
  type: ESetCategory.SET_CATEGORY;
}
