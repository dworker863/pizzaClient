import { MouseEvent, ReactNode } from 'react';

export interface IContactModalProps {
  modalClickHandler: (event: MouseEvent<HTMLButtonElement>) => void;
  mobileIsActive?: boolean;
  screen: 'desktop' | 'tablet' | 'mobile';
}

export interface IContactModalItemProps {
  children?: ReactNode;
}
