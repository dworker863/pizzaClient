import { FC } from 'react';
import { IAuthModalProps } from './IAuthModal';
import ButtonClose from '../../Elements/CloseButton/CloseButton';
import AuthFormContainer from '../AuthFormContainer/AuthFormContainer';
import ConditionalAuthContainer from '../ConditionalAuthContainer/ConditionalAuthContainer';

const AuthModal: FC<IAuthModalProps> = ({
  setModal,
  closeButtonClickHandler,
  screen,
}) => {
  return (
    <ConditionalAuthContainer screen={screen}>
      <ButtonClose clickHandler={closeButtonClickHandler} />
      <AuthFormContainer setModal={setModal} />
    </ConditionalAuthContainer>
  );
};

export default AuthModal;
