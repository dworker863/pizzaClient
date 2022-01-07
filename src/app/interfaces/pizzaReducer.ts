import { IPizza } from './pizza';

export enum ESetPizzas {
  SET_PIZZAS = 'SET_PIZZAS',
}

export interface IPizzas {
  pizzas: IPizza[];
}

export interface ISetPizzas {
  type: ESetPizzas.SET_PIZZAS;
}
