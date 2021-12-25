import { FC, MouseEvent } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import Button from '../Buttons/Button';

const StyledAuthModalMobile = styled.div`
  ${tw`
    z-20
    absolute
    top-0
    right-0
    w-screen
    h-screen
    p-8
    pt-24
    rounded-lg
    bg-white
  `}

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
      background-color: ${(props) => props.theme.colors.lightGrey};

      &:after {
        background-color: ${(props) => props.theme.colors.lightGrey};
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

  background-color: ${(props) => props.theme.colors.superLightGrey};
  height: 2px;
  transform: rotate(45deg);
  transition: all 0.2s;

  &:after {
    content: '';
    display: block;
    background-color: ${(props) => props.theme.colors.superLightGrey};
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
  color: ${(props) => props.theme.colors.brown};
  background-color: #f8f8f8;

  &:nth-child(3) {
    margin-bottom: 20px;
  }
`;

const StyledRestoreAnchor = styled.a`
  ${tw`
    mb-10
  `}

  color: ${(props) => props.theme.colors.primary};
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

  color: ${(props) => props.theme.colors.primary};
`;

interface IAuthModalMobileProps {
  closeButtonClickHandler: (event: MouseEvent<HTMLButtonElement>) => void;
}

const AuthModalMobile: FC<IAuthModalMobileProps> = ({
  closeButtonClickHandler,
}) => {
  const loginClickHandler = (event: MouseEvent<HTMLButtonElement>): void => {
    console.log('Registration');
  };

  return (
    <StyledAuthModalMobile>
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
    </StyledAuthModalMobile>
  );
};

export default AuthModalMobile;
