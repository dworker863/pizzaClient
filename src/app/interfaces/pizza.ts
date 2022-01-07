type TpizzaType = 'Традиционное' | 'Тонкое';

export interface IPizza {
  name: string;
  description: string;
  type: TpizzaType;
  size: string[];
  price: string;
}
