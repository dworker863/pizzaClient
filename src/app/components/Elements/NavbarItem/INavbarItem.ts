import { MouseEvent, ReactNode } from 'react';

export interface INavbarProps {
  modalClickHandler: (event: MouseEvent<HTMLButtonElement>) => void;
  mobileIsActive?: boolean;
  screen: 'desktop' | 'tablet' | 'mobile';
}

export interface INavbarItemProps {
  children?: ReactNode;
}
