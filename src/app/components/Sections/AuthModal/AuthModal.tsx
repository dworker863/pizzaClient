import { FC } from 'react';
import { IAuthModalProps } from './IAuthModal';
import ButtonClose from '../../Elements/CloseButton/CloseButton';
import AuthFormContainer from '../../Blocks/AuthFormContainer/AuthFormContainer';
import ConditionalAuthContainer from '../../Blocks/ConditionalAuthContainer/ConditionalAuthContainer';

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
