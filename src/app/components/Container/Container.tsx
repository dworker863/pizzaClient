import { FC } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { IContainerProps } from '../../interfaces/container';

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

const Container: FC<IContainerProps> = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default Container;
