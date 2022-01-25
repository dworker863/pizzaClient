import { ReactNode } from 'react';

export interface IConditionalAuthContainerProps {
  screen: 'desktop' | 'tablet' | 'mobile';
  children: ReactNode;
}
