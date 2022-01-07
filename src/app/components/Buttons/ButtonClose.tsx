import { FC } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { IButtonCloseProps } from '../../interfaces/button';

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

const ButtonClose: FC<IButtonCloseProps> = ({ clickHandler }) => {
  return (
    <StyledCloseButtonWrapper onClick={clickHandler}>
      <StyledCloseButton />
    </StyledCloseButtonWrapper>
  );
};

export default ButtonClose;
