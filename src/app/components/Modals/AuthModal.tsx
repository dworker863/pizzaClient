import { FC, MouseEvent } from 'react';
import ButtonClose from '../Buttons/ButtonClose';
import AuthForm from '../common/AuthForm';
import ConditionalAuthWrapper from './ConditionalAuthWrapper';

interface IAuthModalProps {
  formFields: string[][];
  closeButtonClickHandler: (event: MouseEvent<HTMLDivElement>) => void;
  screen: 'desktop' | 'tablet' | 'mobile';
}

const AuthModal: FC<IAuthModalProps> = ({
  closeButtonClickHandler,
  formFields,
  screen,
}) => {
  return (
    <ConditionalAuthWrapper screen={screen}>
      <ButtonClose clickHandler={closeButtonClickHandler} />
      <AuthForm formFields={formFields} />
    </ConditionalAuthWrapper>
  );
};

export default AuthModal;
