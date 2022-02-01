import { ReactNode } from 'react';

type TScreen = 'desktop' | 'tablet' | 'mobile';

export interface IConditionalContactModalContainerProps {
  mobileIsActive?: boolean;
  screen: TScreen;
  children: ReactNode;
}
