import { FC, MouseEvent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import tw from 'twin.macro';
import Button from '../Buttons/Button';
import MenuItem from './MenuItem';
import NavbarItem from './NavbarItem';

const NavbarTabletWrapper = styled.nav`
  ${tw`
    z-10
    absolute
    right-0
    w-96
    p-8
    pt-24
    rounded-lg
    bg-white
    lg:right-10
  `}

  box-shadow: 0 2px 12px 0 rgb(41 44 51 / 20%);
`;

const StyledNavbarTablet = styled.ul`
  ${tw`
    grid
    grid-rows-3
    grid-cols-1
  `}
`;

const StyledText = styled.p`
  ${tw`
    font-sans
    text-sm
    font-normal
  `}

  color: ${(props) => props.theme.colors.lightGrey};
`;

const StyledTel = styled.p`
  ${tw`
    text-lg
    font-bold
  `}

  font-family: Montserrat, sans-serif;
  color: ${(props) => props.theme.colors.brown};
`;

const StyledTelIcon = styled.span`
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

interface INavbarTablet {
  modalClickHandler: (event: MouseEvent<HTMLButtonElement>) => void;
}

const NavbarTablet: FC<INavbarTablet> = ({ modalClickHandler }) => {
  return (
    <NavbarTabletWrapper>
      <StyledNavbarTablet>
        <NavbarItem>
          <StyledText>Войдите чтобы получать бонусы и подарки</StyledText>
          <Button text="ВХОД" clickHandler={modalClickHandler} inverse login />
        </NavbarItem>
        <NavbarItem>
          <MenuItem />
        </NavbarItem>
        <NavbarItem>
          <StyledTel>Телефон: 1234</StyledTel>
          <StyledTelIcon>
            <FontAwesomeIcon icon={faPhone} className="m-auto" />
          </StyledTelIcon>
        </NavbarItem>
      </StyledNavbarTablet>
    </NavbarTabletWrapper>
  );
};

export default NavbarTablet;
