import { FC } from 'react';
import { IAuthModalProps } from '../../interfaces/authModal';
import ButtonClose from '../Buttons/ButtonClose';
import AuthFormContainer from '../common/AuthFormContainer';
import ConditionalAuthWrapper from './ConditionalAuthWrapper';

const AuthModal: FC<IAuthModalProps> = ({
  setModal,
  closeButtonClickHandler,
  screen,
}) => {
  return (
    <ConditionalAuthWrapper screen={screen}>
      <ButtonClose clickHandler={closeButtonClickHandler} />
      <AuthFormContainer setModal={setModal} />
    </ConditionalAuthWrapper>
  );
};

export default AuthModal;
