import styled from 'styled-components';
import tw from 'twin.macro';

export const StyledMenu = styled.ul`
  ${tw`
    inline-block
    list-none
  `}
`;

export const StyledNavbarTabletMobile = styled.ul`
  ${tw`
    grid
    grid-rows-3
    grid-cols-1
  `}
`;

export const StyledText = styled.p`
  ${tw`
    font-sans
    text-sm
    font-normal
  `}

  color: ${(props) => props.theme.colors.lightGrey};
`;

export const StyledTel = styled.p`
  ${tw`
    text-lg
    font-bold
  `}

  font-family: Montserrat, sans-serif;
  color: ${(props) => props.theme.colors.brown};
`;

export const StyledTelIcon = styled.span`
  ${tw`
    flex
    w-12
    h-12
    rounded-full
  `}

  font-family: Montserrat, sans-serif;
  border: 1px solid ${(props) => props.theme.colors.brown};
  color: ${(props) => props.theme.colors.brown};
`;
