import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC, MouseEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { INavbarProps } from '../../interfaces/navbar';
import { getLogout } from '../../redux/reducers/authReducer/auth';
import { RootState } from '../../redux/store';
import Button from '../Buttons/Button';
import ConditionalNavbarContainer from './ConditionalNavbarContainer';
import MenuItem from './MenuItem';
import NavbarItem from './NavbarItem';
import {
  StyledMenu,
  StyledNavbarTabletMobile,
  StyledTel,
  StyledTelIcon,
  StyledText,
} from './StyledNavbar';

const Navbar: FC<INavbarProps> = ({
  modalClickHandler,
  mobileIsActive,
  screen,
}) => {
  const auth = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  const logoutClickHandler = () => {
    dispatch(getLogout());
  };

  console.log(auth);

  return (
    <ConditionalNavbarContainer mobileIsActive={mobileIsActive} screen={screen}>
      {screen === 'desktop' && (
        <>
          <StyledMenu>
            <MenuItem />
          </StyledMenu>
          <Button
            text={auth.auth ? auth.username + ' LOGOUT' : 'ВХОД'}
            clickHandler={auth.auth ? logoutClickHandler : modalClickHandler}
            inverse
            login
          />
        </>
      )}
      {(screen === 'tablet' || screen === 'mobile') && (
        <>
          <StyledNavbarTabletMobile>
            <NavbarItem>
              <StyledText>Войдите чтобы получать бонусы и подарки</StyledText>
              <Button
                text={auth.auth ? auth.username + ' LOGOUT' : 'ВХОД'}
                clickHandler={
                  auth.auth ? logoutClickHandler : modalClickHandler
                }
                inverse
                login
              />
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
          </StyledNavbarTabletMobile>
        </>
      )}
    </ConditionalNavbarContainer>
  );
};

export default Navbar;
