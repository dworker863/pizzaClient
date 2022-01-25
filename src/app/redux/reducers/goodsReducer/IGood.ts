type TpizzaType = 'Традиционное' | 'Тонкое';

export interface IGood {
  name: string;
  description?: string;
  type?: TpizzaType;
  size?: string;
  price: string;
}
