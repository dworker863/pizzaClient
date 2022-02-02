import { MouseEvent } from 'react';

export interface IAuthModalProps {
  closeButtonClickHandler: (event: MouseEvent<HTMLDivElement>) => void;
  setModal: () => void;
  screen: 'desktop' | 'tablet' | 'mobile';
}
