import { MouseEvent, ReactNode } from 'react';

export interface IAuthModalProps {
  closeButtonClickHandler: (event: MouseEvent<HTMLDivElement>) => void;
  setModal: () => void;
  screen: 'desktop' | 'tablet' | 'mobile';
}

export interface IConditionalAuthContainerProps {
  screen: 'desktop' | 'tablet' | 'mobile';
  children: ReactNode;
}
