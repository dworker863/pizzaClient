import { FC, useState, MouseEvent, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';
import tw from 'twin.macro';
import Container from '../Container/Container';
import LogoWrapper from './Logo';
import Hamburger from './Hamburger/Hamburger';
import Navbar from '../Navbar/Navbar';
import AuthModal from '../Modals/AuthModal';
import { getUsers } from '../../redux/reducers/usersReducer/users';
import Button from '../Buttons/Button/Button';

const StyledTopLine = styled.div`
  ${tw`
  bg-white
    pt-4
    pb-2
  `}
`;

const TopLine: FC = () => {
  const dispatch = useDispatch();

  useEffect((): void => {
    dispatch(getUsers());
  }, [dispatch]);

  const [hamburgerActive, sethamburgerActive] = useState<boolean>(false);
  const [modal, setModal] = useState<boolean>(false);

  const isDesktopOrLaptop = useMediaQuery({ minWidth: 1280 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1280 });
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const hamburgerClickHandler = (event: MouseEvent<HTMLDivElement>): void => {
    hamburgerActive && setModal(false);
    sethamburgerActive(!hamburgerActive);
  };

  const modalClickHandler = (): void => {
    setModal(!modal);
  };

  return (
    <StyledTopLine>
      {isMobile && (
        <Navbar
          modalClickHandler={modalClickHandler}
          mobileIsActive={hamburgerActive ? true : false}
          screen="mobile"
        />
      )}
      {isMobile && modal && (
        <AuthModal
          setModal={modalClickHandler}
          closeButtonClickHandler={modalClickHandler}
          screen="mobile"
        />
      )}
      <Container>
        {isDesktopOrLaptop && modal && (
          <AuthModal
            setModal={modalClickHandler}
            closeButtonClickHandler={modalClickHandler}
            screen="desktop"
          />
        )}
        {isTablet && modal && (
          <AuthModal
            setModal={modalClickHandler}
            closeButtonClickHandler={modalClickHandler}
            screen="tablet"
          />
        )}
        <LogoWrapper />
        {isDesktopOrLaptop && hamburgerActive ? (
          <Navbar modalClickHandler={modalClickHandler} screen="desktop" />
        ) : (
          <div>
            <Button
              text="Укажите свой адрес"
              clickHandler={(event: MouseEvent<HTMLButtonElement>): void =>
                console.log('Address')
              }
              address
            />
          </div>
        )}
        {isTablet && hamburgerActive && (
          <Navbar modalClickHandler={modalClickHandler} screen="tablet" />
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
