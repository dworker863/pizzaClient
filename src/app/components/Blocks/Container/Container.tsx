import { FC } from 'react';
import { IContainerProps } from './IContainer';
import { StyledContainer } from './StyledContainer';

const Container: FC<IContainerProps> = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default Container;
