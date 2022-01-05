import { FC, useState, MouseEvent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';
import tw from 'twin.macro';
import Container from '../Container/Container';
import LogoWrapper from './Logo';
import Hamburger from './Hamburger/Hamburger';
import Navbar from '../Navbar/Navbar';
import AuthModal from '../Modals/AuthModal';
import Button from '../Buttons/Button';
import { getUsers } from '../../redux/reducers/usersReducer/users';

const StyledTopLine = styled.div`
  ${tw`
    pt-5
  `}
`;

const TopLine: FC = () => {
  const users = useSelector((state: RootState) => state.users);
  const dispatch = useDispatch();

  useEffect((): void => {
    dispatch(getUsers());
    console.log(users);
  }, [dispatch]);

  const [hamburgerActive, sethamburgerActive] = useState<boolean>(false);
  const [modal, setModal] = useState<boolean>(false);

  const isDesktopOrLaptop = useMediaQuery({ minWidth: 1280 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1280 });
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const hamburgerClickHandler = (event: MouseEvent<HTMLDivElement>): void => {
    sethamburgerActive(!hamburgerActive);
  };

  const modalClickHandler = (
    event: MouseEvent<HTMLButtonElement | HTMLDivElement>,
  ): void => {
    setModal(!modal);
  };

  const formFields: string[][] = [
    ['tel', 'Телефон', 'tel', '+7 777 777 77 77'],
    ['password', 'Пароль', 'password'],
    ['passwordConfirmation', 'Подтвердите пароль', 'password'],
    ['name', 'Имя', 'text'],
    ['email', 'Email', 'email'],
  ];

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
          closeButtonClickHandler={modalClickHandler}
          formFields={formFields}
          screen="mobile"
        />
      )}
      <Container>
        {isDesktopOrLaptop && modal && (
          <AuthModal
            closeButtonClickHandler={modalClickHandler}
            formFields={formFields}
            screen="desktop"
          />
        )}
        {isTablet && modal && (
          <AuthModal
            closeButtonClickHandler={modalClickHandler}
            formFields={formFields}
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
