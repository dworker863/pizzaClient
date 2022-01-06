import { FC, MouseEvent } from 'react';
import ButtonClose from '../Buttons/ButtonClose';
import AuthFormContainer from '../common/AuthFormContainer';
import ConditionalAuthWrapper from './ConditionalAuthWrapper';

interface IAuthModalProps {
  closeButtonClickHandler: (event: MouseEvent<HTMLDivElement>) => void;
  setModal: () => void;
  screen: 'desktop' | 'tablet' | 'mobile';
}

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
