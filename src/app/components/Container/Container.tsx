import { FC, ReactNode } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const StyledContainer = styled.div`
  ${tw`
    flex
    container
    mx-auto
    justify-between
  `}
`;

interface ContainerProps {
  children?: ReactNode;
}

const Container: FC<ContainerProps> = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default Container;
