import { FC, MouseEvent, useState } from 'react';
import Button from '../Buttons/Button';
import ButtonClose from '../Buttons/ButtonClose';
import Anchor from '../common/Anchor';
import AuthForm from '../common/AuthForm';
import ConditionalAuthWrapper from './ConditionalAuthWrapper';
import { StyledAuthButtonsWrapper } from './StyledAuth';

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
  const [mode, setMode] = useState<string | null>('login');

  const changeModeHandler = (event: MouseEvent<HTMLAnchorElement>): void => {
    event.preventDefault();
    setMode(mode === 'login' ? 'registration' : 'login');
  };

  const loginClickHandler = (event: MouseEvent<HTMLButtonElement>): void => {
    console.log('Login');
  };

  const registrationClickHandler = (
    event: MouseEvent<HTMLButtonElement>,
  ): void => {
    setMode(mode === 'registration' ? 'registration continue' : null);
  };

  formFields = formFields.filter(([name, labelText, type]) =>
    mode === 'login'
      ? name !== 'email' &&
        name !== 'name' &&
        labelText !== 'Подтвердите пароль'
      : mode === 'registration'
      ? type !== 'password'
      : type === 'password',
  );

  return (
    <ConditionalAuthWrapper screen={screen}>
      <ButtonClose clickHandler={closeButtonClickHandler} />
      <AuthForm formFields={formFields} />

      <Anchor
        text="Восстановить пароль"
        clickHandler={(event: MouseEvent<HTMLAnchorElement>): void =>
          console.log('Restore')
        }
      />
      <StyledAuthButtonsWrapper>
        <Anchor
          text={mode === 'login' ? 'Регистрация' : 'Отмена'}
          clickHandler={changeModeHandler}
        />
        <Button
          text={mode === 'login' ? 'Войти' : 'Продолжить'}
          clickHandler={
            mode === 'login' ? loginClickHandler : registrationClickHandler
          }
        />
      </StyledAuthButtonsWrapper>
    </ConditionalAuthWrapper>
  );
};

export default AuthModal;
