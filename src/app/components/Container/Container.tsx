import { FC, ReactNode } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { ContainerProps } from '../../interfaces/container';

const StyledContainer = styled.div`
  ${tw`
    relative
    flex
    flex-wrap
    container
    mx-auto
    px-5
    justify-between
    lg:px-14
  `}
`;

const Container: FC<ContainerProps> = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default Container;
