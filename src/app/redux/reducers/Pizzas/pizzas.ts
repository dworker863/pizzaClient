import {
  ESetPizzas,
  IPizzas,
  ISetPizzas,
} from '../../../interfaces/pizzaReducer';

type TPizzaActionTypes = ISetPizzas;

const initialState: IPizzas = {
  pizzas: [
    {
      name: 'Чеддер чикен клаб',
      description:
        'Фирменные томатный соус "Папа Джонс", куриная грудка, сыр моцарелла, сыр чеддер, томаты, соус',
      type: 'Традиционное',
      size: ['23см', '30см', '35см', '40см'],
      price: '2350тг',
    },
    {
      name: 'Чеддер чикен клаб',
      description:
        'Фирменные томатный соус "Папа Джонс", куриная грудка, сыр моцарелла, сыр чеддер, томаты, соус',
      type: 'Традиционное',
      size: ['23см', '30см', '35см', '40см'],
      price: '2350тг',
    },
    {
      name: 'Чеддер чикен клаб',
      description:
        'Фирменные томатный соус "Папа Джонс", куриная грудка, сыр моцарелла, сыр чеддер, томаты, соус',
      type: 'Традиционное',
      size: ['23см', '30см', '35см', '40см'],
      price: '2350тг',
    },
  ],
};

const pizzas = (state = initialState, action: TPizzaActionTypes): IPizzas => {
  switch (action.type) {
    case ESetPizzas.SET_PIZZAS:
      return { ...state };

    default:
      return state;
  }
};

export default pizzas;
