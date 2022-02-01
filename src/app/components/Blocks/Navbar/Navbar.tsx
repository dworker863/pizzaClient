import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getLogout } from '../../../redux/reducers/authReducer/authReducer';
import { RootState } from '../../../redux/store';
import { items } from '../../../utils/staticData';
import Button from '../../Elements/Button/Button';
import Menu from '../Menu/Menu';
import NavbarItem from '../../Elements/NavbarItem/NavbarItem';
import ConditionalNavbarContainer from '../ConditionalNavbarContainer/ConditionalNavbarContainer';
import { INavbarProps } from './INavbar';
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

  const logoutClickHandler = (): void => {
    dispatch(getLogout());
  };

  return (
    <ConditionalNavbarContainer mobileIsActive={mobileIsActive} screen={screen}>
      {screen === 'desktop' && (
        <>
          <StyledMenu>
            <Menu items={items} />
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
              <Menu items={items} />
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
