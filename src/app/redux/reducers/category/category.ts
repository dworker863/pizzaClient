enum ESetCategory {
  SET_CATEGORY = 'SET_CATEGORY',
}

interface ICategory {
  category: string[];
}

interface ISetCategory {
  type: ESetCategory.SET_CATEGORY;
}

type TCategoryActionTypes = ISetCategory;

const initialState: ICategory = {
  category: ['Пицца', 'Закуски', 'Салаты', 'Десерты', 'Напитки', 'Горячее'],
};

const category = (
  state = initialState,
  action: TCategoryActionTypes,
): ICategory => {
  switch (action.type) {
    case ESetCategory.SET_CATEGORY:
      return { ...state };

    default:
      return state;
  }
};

export default category;
