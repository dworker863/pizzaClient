import { ICartGood } from '../../../redux/reducers/cartReducer/ICartReducer';

export interface ICartItemProps {
  good: ICartGood;
  totalPrice: number;
  closeButtonClickHandler: (name: string, price: number) => void;
}
