import { FC } from 'react';
import { IContainerProps } from './IContainer';
import { StyledContainer } from './StyledContainer';

const Container: FC<IContainerProps> = ({ children, reverse }) => {
  return <StyledContainer reverse={reverse}>{children}</StyledContainer>;
};

export default Container;
