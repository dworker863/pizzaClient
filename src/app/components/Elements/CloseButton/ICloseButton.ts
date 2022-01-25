import { MouseEvent } from 'react';

export interface ICloseButtonProps {
  clickHandler: (event: MouseEvent<HTMLDivElement>) => void;
}
