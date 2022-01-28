import styled from 'styled-components';
import tw from 'twin.macro';

export const StyledContainer = styled.div`
  ${tw`
    relative
    flex
    flex-wrap
    flex-row
    container
    mx-auto
    px-5
    justify-between
    lg:px-14
    xl:flex-nowrap
    xl:flex-row-reverse
  `}
`;
