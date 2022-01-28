import styled from 'styled-components';
import tw from 'twin.macro';

export const StyledContainer = styled.div`
  ${tw`
    relative
    flex
    flex-wrap
    flex-row-reverse
    container
    mx-auto
    px-5
    justify-between
    lg:px-14
    xl:flex-nowrap flex-row
  `}
`;
