import styled from 'styled-components';
import tw from 'twin.macro';

export const StyledMenu = styled.ul`
  ${tw`
    inline-block
  `}
`;

export const StyledItem = styled.li`
  ${tw`
    inline-block
    font-semibold
    mr-4
    
    `}

  font-family: Montserrat, sans-serif;
  font-size: 14px;
  letter-spacing: 0.08rem;
  color: ${(props) => props.theme.colors.brown};

  &:hover {
    color: ${(props) => props.theme.colors.primary};
  }
`;
