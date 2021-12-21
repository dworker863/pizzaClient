import { FC, MouseEvent, useState } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import Button from '../Buttons/Button';
import FormItem from '../common/FormItem';

const StyledAuthModal = styled.div`
  ${tw`
    z-20
    absolute    
    text-sm
    px-5
    py-8
    rounded-xl
  `}

  top: 52px;
  right: 140px;
  width: 340px;
  padding-top: 48px;
  box-shadow: 0 2px 12px 0 rgb(41 44 51 / 20%);
  background-color: #fff;
  font-family: Roboto, sans-serif;
`;

const StyledCloseButtonWrapper = styled.div`
  ${tw`
    absolute
    top-1
    right-0
    p-4
    ml-auto
  `}

  &:hover {
    cursor: pointer;

    span {
      background-color: #a69895;

      &:after {
        background-color: #a69895;
      }
    }
  }
`;

const StyledCloseButton = styled.span`
  ${tw`
    relative
    block
    w-4
  `}

  background-color: rgba(191,183,182,.6);
  height: 2px;
  transform: rotate(45deg);
  transition: all 0.2s;

  &:after {
    content: '';
    display: block;
    background-color: rgba(191, 183, 182, 0.6);
    height: 2px;
    transform: rotate(-90deg);
    transition: all 0.2s;
  }
`;

const StyledRestoreAnchor = styled.a`
  ${tw`
    mb-10
  `}

  color: #50a684;
`;

const StyledAuthButtonsWrapper = styled.div`
  ${tw`
    flex
    justify-between
    mt-10
  `}
`;

const StyledRegistrationAnchor = styled.a`
  ${tw`
    pt-2
  `}

  color: #50a684;
`;

interface IAuthModalProps {
  itemsList: string[][];
  closeButtonClickHandler: (event: MouseEvent<HTMLButtonElement>) => void;
}

const AuthModal: FC<IAuthModalProps> = ({
  closeButtonClickHandler,
  itemsList,
}) => {
  const [mode, setMode] = useState<string>('login');

  const changeModeHandler = (event: MouseEvent<HTMLAnchorElement>): void => {
    event.preventDefault();
    setMode(mode === 'login' ? 'registration' : 'login');
  };

  const loginClickHandler = (event: MouseEvent<HTMLButtonElement>): void => {
    console.log('Registration');
  };

  itemsList = itemsList.filter(([id]) =>
    mode === 'login' ? id !== 'email' && id !== 'name' : id !== 'password',
  );

  return (
    <StyledAuthModal>
      <StyledCloseButtonWrapper>
        <StyledCloseButton onClick={closeButtonClickHandler} />
      </StyledCloseButtonWrapper>
      {itemsList.map(([id, labelText, type]) => (
        <FormItem id={id} labelText={labelText} type={type} />
      ))}
      <StyledRestoreAnchor href="http://">
        Восстановить пароль
      </StyledRestoreAnchor>
      <StyledAuthButtonsWrapper>
        <StyledRegistrationAnchor href="http://" onClick={changeModeHandler}>
          {mode === 'login' ? 'Регистрация' : 'Отмена'}
        </StyledRegistrationAnchor>
        <Button
          text={mode === 'login' ? 'Вход' : 'Продолжить'}
          clickHandler={loginClickHandler}
        />
      </StyledAuthButtonsWrapper>
    </StyledAuthModal>
  );
};

export default AuthModal;
