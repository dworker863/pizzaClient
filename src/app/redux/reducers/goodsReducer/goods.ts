import { ISalad } from './../../../interfaces/salad';
import { IPizza } from '../../../interfaces/pizza';

enum ESetGoods {
  SET_GOODS = 'SET_GOODS',
}

type TGoodsType = IPizza | ISalad;

interface IGoodsState {
  pizzas: TGoodsType[];
  salads: TGoodsType[];
}

interface ISetGoodsAction {
  type: ESetGoods.SET_GOODS;
}

type TGoodsActionTypes = ISetGoodsAction;

const initialState: IGoodsState = {
  pizzas: [
    {
      name: 'Чеддер чикен клаб',
      description:
        'Фирменные томатный соус "Папа Джонс", куриная грудка, сыр моцарелла, сыр чеддер, томаты, соус',
      type: 'Традиционное',
      size: ['23см', '30см', '35см', '40см'],
      price: '2350тг',
      category: 'pizzas',
    },
    {
      name: 'Чеддер чикен клаб',
      description:
        'Фирменные томатный соус "Папа Джонс", куриная грудка, сыр моцарелла, сыр чеддер, томаты, соус',
      type: 'Традиционное',
      size: ['23см', '30см', '35см', '40см'],
      price: '2350тг',
      category: 'pizzas',
    },
    {
      name: 'Чеддер чикен клаб',
      description:
        'Фирменные томатный соус "Папа Джонс", куриная грудка, сыр моцарелла, сыр чеддер, томаты, соус',
      type: 'Традиционное',
      size: ['23см', '30см', '35см', '40см'],
      price: '2350тг',
      category: 'pizzas',
    },
  ],
  salads: [
    {
      name: 'Салат «Греческий»',
      description:
        'Айсберг, Томаты, Огурцы, Красный и желтый перец, Черные оливки, Фета, Оливковое масло',
      price: '1600тг',
      category: 'salads',
    },
    {
      name: 'Салат «Цезарь»',
      description:
        'Запечённое куриное филе, Пармезан, Черри, Айсберг, Сухарики, Соус «Цезарь»',
      price: '1600тг',
      category: 'salads',
    },
  ],
};

const goods = (
  state = initialState,
  action: TGoodsActionTypes,
): IGoodsState => {
  switch (action.type) {
    case ESetGoods.SET_GOODS:
      return { ...state };

    default:
      return state;
  }
};

export default goods;
