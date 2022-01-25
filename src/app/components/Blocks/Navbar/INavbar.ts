import { MouseEvent } from 'react';

export interface INavbarProps {
  modalClickHandler: (event: MouseEvent<HTMLButtonElement>) => void;
  mobileIsActive?: boolean;
  screen: 'desktop' | 'tablet' | 'mobile';
}
