export interface ICartItemProps {
  name: string;
  price: string;
  image: string;
  closeButtonClickHandler: () => void;
  countButtonClickHandler: (price: number) => void;
}
