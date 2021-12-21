import { FC, MouseEvent } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import Button from '../Buttons/Button';

const StyledAuthModal = styled.div`
  ${tw`
    z-20
    absolute
    w-96
    p-8
    pt-16
    rounded-lg
    text-sm
  `}

  right: 40px;
  padding-top: 68px;
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

const StyledLabel = styled.label`
  color: #a69895;
`;

const StyledInput = styled.input`
  ${tw`
    rounded-lg    
    mt-1
    `}

  width: 100%;
  height: 49px;
  color: #70544f;
  background-color: #f8f8f8;

  &:nth-child(3) {
    margin-bottom: 20px;
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
  closeButtonClickHandler: (event: MouseEvent<HTMLButtonElement>) => void;
}

const AuthModal: FC<IAuthModalProps> = ({ closeButtonClickHandler }) => {
  const loginClickHandler = (event: MouseEvent<HTMLButtonElement>): void => {
    console.log('Registration');
  };

  return (
    <StyledAuthModal>
      <StyledCloseButtonWrapper>
        <StyledCloseButton onClick={closeButtonClickHandler} />
      </StyledCloseButtonWrapper>
      <StyledLabel htmlFor="tel">Номер Телефона</StyledLabel>
      <StyledInput type="tel" id="tel" />
      <StyledLabel htmlFor="password">Пароль</StyledLabel>
      <StyledInput type="password" id="password" />
      <StyledRestoreAnchor target="_blank" rel="noopener noreferrer">
        Восстановить пароль
      </StyledRestoreAnchor>
      <StyledAuthButtonsWrapper>
        <StyledRegistrationAnchor
          href="http://"
          target="_blank"
          rel="noopener noreferrer"
        >
          Регистрация
        </StyledRegistrationAnchor>
        <Button text="Войти" clickHandler={loginClickHandler} />
      </StyledAuthButtonsWrapper>
    </StyledAuthModal>
  );
};

export default AuthModal;
