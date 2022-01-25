import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getLogout } from '../../../redux/reducers/authReducer/authReducer';
import { RootState } from '../../../redux/store';
import Button from '../../Elements/Button/Button';
import MenuItem from '../../Elements/MenuItem/MenuItem';
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
