import { FC, MouseEvent, useState } from 'react';
import styled, { css } from 'styled-components';
import tw from 'twin.macro';
import Button from '../Buttons/Button';
import ButtonClose from '../Buttons/ButtonClose';
import Anchor from '../common/Anchor';
import FormItem from '../common/FormItem';

interface IStyledAuthModal {
  tablet?: boolean;
  mobile?: boolean;
}

const StyledAuthModal = styled.div<IStyledAuthModal>`
  ${tw`
    z-20
    absolute    
    text-sm
    px-5
    py-8
    rounded-xl
  `}

  ${({ tablet }) => tablet && css``}

  top: 52px;
  right: 140px;
  width: 340px;
  padding-top: 48px;
  box-shadow: 0 2px 12px 0 rgb(41 44 51 / 20%);
  background-color: #fff;
  font-family: Roboto, sans-serif;
`;

const StyledAuthButtonsWrapper = styled.div`
  ${tw`
    flex
    justify-between
    mt-10
  `}

  line-height: 44px;
`;

interface IAuthModalProps {
  itemsList: string[][];
  closeButtonClickHandler: (event: MouseEvent<HTMLDivElement>) => void;
}

const AuthModal: FC<IAuthModalProps> = ({
  closeButtonClickHandler,
  itemsList,
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

  itemsList = itemsList.filter(([id, labelText]) =>
    mode === 'login'
      ? id !== 'email' && id !== 'name' && labelText !== 'Подтвердите пароль'
      : mode === 'registration'
      ? id !== 'password'
      : id === 'password',
  );

  return (
    <StyledAuthModal>
      <ButtonClose clickHandler={closeButtonClickHandler} />
      {itemsList.map(([id, labelText, type]) => (
        <FormItem id={id} labelText={labelText} type={type} />
      ))}
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
    </StyledAuthModal>
  );
};

export default AuthModal;
