import { FC, useState, MouseEvent, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import Container from '../Container/Container';
import LogoWrapper from '../../Elements/Logo/Logo';
import Hamburger from '../../Elements/Hamburger/Hamburger';
import AuthModal from '../AuthModal/AuthModal';
import { StyledTopLine } from './StyledTopLine';
import Button from '../../Elements/Button/Button';
import { getUsers } from '../../../redux/reducers/usersReducer/usersReducer';
import Navbar from '../Navbar/Navbar';

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
            {isTablet && (
              <Button
                text="Укажите свой адрес"
                clickHandler={(event: MouseEvent<HTMLButtonElement>): void =>
                  console.log('Address')
                }
                address
              />
            )}
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
