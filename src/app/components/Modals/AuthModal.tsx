import { FC } from 'react';
import { IAuthModalProps } from '../../interfaces/authModal';
import ButtonClose from '../Buttons/ButtonClose';
import AuthFormContainer from '../common/AuthFormContainer';
import ConditionalAuthContainer from './ConditionalAuthContainer';

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
