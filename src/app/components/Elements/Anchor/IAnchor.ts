import { MouseEvent } from 'react';

export interface IAnchorProps {
  text: string;
  clickHandler: (event: MouseEvent<HTMLAnchorElement>) => void;
}
