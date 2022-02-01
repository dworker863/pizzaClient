import styled from 'styled-components';
import tw from 'twin.macro';

export const StyledNavbarItem = styled.li`
  ${tw`
    mt-auto
    font-semibold
    mr-4
    
  `}

  cursor: pointer;

  color: ${(props) => props.theme.colors.brown};

  & a.active,
  &:hover {
    color: ${(props) => props.theme.colors.primary};
  }

  &:last-child {
    margin-right: 0;
  }

  & img {
    margin: 0 auto;
  }

  @media (max-width: 576px) {
    font-size: 12px;
  }
`;

export const StyledMenu = styled.ul`
  ${tw`
    flex
    w-full
    justify-around
  `}
`;

export const StyledNavbar = styled.nav`
  ${tw`
    w-full
    rounded-xl
    mb-20
    `}

  font-family: Montserrat, sans-serif;
  letter-spacing: 0.08rem;
  font-size: 18px;
  background-color: #fff;

  @media (max-width: 768px) {
    display: none;
  }
`;
