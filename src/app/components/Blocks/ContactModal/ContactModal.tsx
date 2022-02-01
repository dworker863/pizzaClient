import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getLogout } from '../../../redux/reducers/authReducer/authReducer';
import { RootState } from '../../../redux/store';
import Button from '../../Elements/Button/Button';
import ContactModalItem from '../../Elements/ContactModalItem/ContactModalItem';
import ConditionalContactModalContainer from '../ConditionalContactModalContainer/ConditionalContactModalContainer';
import { IContactModalProps } from './IContactModal';
import {
  StyledContactModalTabletMobile,
  StyledTel,
  StyledTelIcon,
  StyledText,
} from './StyledContactModal';

const ContactModal: FC<IContactModalProps> = ({
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
    <ConditionalContactModalContainer
      mobileIsActive={mobileIsActive}
      screen={screen}
    >
      {screen === 'desktop' && (
        <>
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
          <StyledContactModalTabletMobile>
            <ContactModalItem>
              <StyledText>Войдите чтобы получать бонусы и подарки</StyledText>
              <Button
                text={auth.auth ? auth.username + ' LOGOUT' : 'ВХОД'}
                clickHandler={
                  auth.auth ? logoutClickHandler : modalClickHandler
                }
                inverse
                login
              />
            </ContactModalItem>
            <ContactModalItem>
              <StyledTel>Телефон: 1234</StyledTel>
              <StyledTelIcon href="tel:1234">
                <FontAwesomeIcon icon={faPhone} className="m-auto" />
              </StyledTelIcon>
            </ContactModalItem>
          </StyledContactModalTabletMobile>
        </>
      )}
    </ConditionalContactModalContainer>
  );
};

export default ContactModal;
