import { ReactNode, MouseEvent } from 'react';

type TScreen = 'desktop' | 'tablet' | 'mobile';

export interface IConditionalNavbarContainerProps {
  mobileIsActive?: boolean;
  screen: TScreen;
  children: ReactNode;
}

export interface IStyledNavbarMobileWrapper {
  isActive?: boolean;
}

export interface INavbarProps {
  modalClickHandler: (event: MouseEvent<HTMLButtonElement>) => void;
  mobileIsActive?: boolean;
  screen: 'desktop' | 'tablet' | 'mobile';
}

export interface INavbarItemProps {
  children?: ReactNode;
}
