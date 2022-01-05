import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC, MouseEvent } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import Button from '../Buttons/Button';
import ConditionalNavbarWrapper from './ConditionalNavbarWrapper';
import MenuItem from './MenuItem';
import NavbarItem from './NavbarItem';
import {
  StyledMenu,
  StyledNavbarTabletMobile,
  StyledTel,
  StyledTelIcon,
  StyledText,
} from './StyledNavbar';

interface INavbarProps {
  modalClickHandler: (event: MouseEvent<HTMLButtonElement>) => void;
  mobileIsActive?: boolean;
  screen: 'desktop' | 'tablet' | 'mobile';
}

const Navbar: FC<INavbarProps> = ({
  modalClickHandler,
  mobileIsActive,
  screen,
}) => {
  const auth = useSelector((state: RootState) => state.auth);

  return (
    <ConditionalNavbarWrapper mobileIsActive={mobileIsActive} screen={screen}>
      {screen === 'desktop' && (
        <>
          <StyledMenu>
            <MenuItem />
          </StyledMenu>
          {auth.auth ? (
            auth.username
          ) : (
            <Button
              text="ВХОД"
              clickHandler={modalClickHandler}
              inverse
              login
            />
          )}
        </>
      )}
      {(screen === 'tablet' || screen === 'mobile') && (
        <>
          <StyledNavbarTabletMobile>
            <NavbarItem>
              <StyledText>Войдите чтобы получать бонусы и подарки</StyledText>
              <Button
                text="ВХОД"
                clickHandler={modalClickHandler}
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
    </ConditionalNavbarWrapper>
  );
};

export default Navbar;
