export interface ICartItemProps {
  name: string;
  price: string;
  image: string;
  itemsCount: number;
  closeButtonClickHandler: (name: string, price: number) => void;
  countButtonClickHandler: (price: number) => void;
}
