import { FC, MouseEvent } from 'react';
import ButtonClose from '../Buttons/ButtonClose';
import AuthFormContainer from '../common/AuthFormContainer';
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
      <AuthFormContainer formFields={formFields} />
    </ConditionalAuthWrapper>
  );
};

export default AuthModal;
