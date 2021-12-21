import { FC, useState, MouseEvent } from 'react';
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';
import tw from 'twin.macro';
import AddressButton from '../Buttons/AddressButton';
import Container from '../Container/Container';
import LogoWrapper from './Logo';
import Hamburger from './Hamburger';
import NavbarMobile from '../Navbar/NavbarMobile';
import Navbar from '../Navbar/Navbar';
import NavbarTablet from '../Navbar/NavbarTablet';
import AuthModal from '../Modals/AuthModal';
import AuthModalTablet from '../Modals/AuthModalTablet';
import AuthModalMobile from '../Modals/AuthModalMobile';

const StyledTopLine = styled.div`
  ${tw`
    pt-5
  `}
`;

const TopLine: FC = () => {
  const [hamburgerActive, sethamburgerActive] = useState<boolean>(false);
  const [modal, setModal] = useState<boolean>(false);

  const isDesktopOrLaptop = useMediaQuery({ minWidth: 1280 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1280 });
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const hamburgerClickHandler = (event: MouseEvent<HTMLDivElement>): void => {
    sethamburgerActive(!hamburgerActive);
  };

  const modalClickHandler = (event: MouseEvent<HTMLButtonElement>): void => {
    setModal(!modal);
  };

  return (
    <StyledTopLine>
      {isMobile && (
        <NavbarMobile
          isActive={hamburgerActive ? true : false}
          modalClickHandler={modalClickHandler}
        />
      )}
      <Container>
        {isDesktopOrLaptop && modal && (
          <AuthModal
            closeButtonClickHandler={modalClickHandler}
            itemsList={[
              ['tel', 'Номер телефона', 'tel'],
              ['email', 'Email', 'email'],
              ['name', 'Имя', 'text'],
              ['password', 'Пароль', 'password'],
              ['password', 'Подтвердите пароль', 'password'],
            ]}
          />
        )}
        {isTablet && modal && (
          <AuthModalTablet closeButtonClickHandler={modalClickHandler} />
        )}
        {isMobile && modal && (
          <AuthModalMobile closeButtonClickHandler={modalClickHandler} />
        )}
        <LogoWrapper />
        {isDesktopOrLaptop && hamburgerActive ? (
          <Navbar modalClickHandler={modalClickHandler} />
        ) : (
          <AddressButton />
        )}
        {isTablet && hamburgerActive && (
          <NavbarTablet modalClickHandler={modalClickHandler} />
        )}
        <Hamburger
          clickHandler={hamburgerClickHandler}
          hamburgerActive={hamburgerActive}
        />
      </Container>
    </StyledTopLine>
  );
};

export default TopLine;
