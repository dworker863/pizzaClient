import { ReactNode } from 'react';

type TScreen = 'desktop' | 'tablet' | 'mobile';

export interface IConditionalNavbarContainerProps {
  mobileIsActive?: boolean;
  screen: TScreen;
  children: ReactNode;
}
