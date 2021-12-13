import { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import tw from 'twin.macro';
import Button from '../Buttons/Button';
import MenuItem from './MenuItem';

const NavbarMobileWrapper = styled.nav`
  ${tw`
    z-10
    absolute
    right-10
    w-96
    p-8
    pt-24
    rounded-lg
    bg-white
  `}

  box-shadow: 0 2px 12px 0 rgb(41 44 51 / 20%);
`;

const StyledNavbarMobile = styled.ul`
  ${tw`
    grid
    grid-rows-3
    grid-cols-1
  `}
`;

const StyledNavbarItem = styled.li`
  ${tw`
    flex
    items-center
    justify-between
    py-4
    px-2
    border-t
    border-gray-200
  `}

  &:nth-child(2) {
    justify-content: flex-end;
  }
`;

const StyledText = styled.p`
  ${tw`
    font-sans
    text-sm
    font-normal
  `}

  color: #a69895;
`;

const StyledTel = styled.p`
  ${tw`
    text-lg
    font-bold
  `}

  font-family: Montserrat, sans-serif;
  color: #70544f;
`;

const StyledTelIcon = styled.span`
  ${tw`
    flex
    w-12
    h-12
    rounded-full
  `}

  font-family: Montserrat, sans-serif;
  border: 1px solid #70544f;
  color: #70544f;
`;

const NavbarMobile: FC = () => {
  return (
    <NavbarMobileWrapper>
      <StyledNavbarMobile>
        <StyledNavbarItem>
          <StyledText>Войдите чтобы получать бонусы и подарки</StyledText>
          <Button text="ВХОД" inverse={true} />
        </StyledNavbarItem>
        <StyledNavbarItem>
          <MenuItem />
        </StyledNavbarItem>
        <StyledNavbarItem>
          <StyledTel>Телефон: 1234</StyledTel>
          <StyledTelIcon>
            <FontAwesomeIcon icon={faPhone} className="m-auto" />
          </StyledTelIcon>
        </StyledNavbarItem>
      </StyledNavbarMobile>
    </NavbarMobileWrapper>
  );
};

export default NavbarMobile;
