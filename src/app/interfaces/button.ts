import { MouseEvent } from 'react';

export interface IButtonProps {
  text: string;
  clickHandler?: (event: MouseEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit' | 'reset';
  inverse?: boolean;
  login?: boolean;
  address?: boolean;
}

export interface IButtonCloseProps {
  clickHandler: (event: MouseEvent<HTMLDivElement>) => void;
}

export interface IStyledButtonProps {
  inverse?: boolean;
  login?: boolean;
  address?: boolean;
}
