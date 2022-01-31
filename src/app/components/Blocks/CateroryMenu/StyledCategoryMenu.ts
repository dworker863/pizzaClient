import styled from 'styled-components';
import tw from 'twin.macro';

export const StyledCategoryMenu = styled.div`
  ${tw`
    flex
    justify-around
    w-full
    mt-10
    py-3
    px-5
    rounded-xl
    font-semibold
  `}

  font-family: Montserrat, sans-serif;
  background-color: #fff;
  color: ${(props) => props.theme.colors.brown};
`;
