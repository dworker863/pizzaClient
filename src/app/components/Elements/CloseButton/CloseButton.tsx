import { FC } from 'react';
import { ICloseButtonProps } from './ICloseButton';
import {
  StyledCloseButton,
  StyledCloseButtonWrapper,
} from './StyledCloseButton';

const CloseButton: FC<ICloseButtonProps> = ({ clickHandler }) => {
  return (
    <StyledCloseButtonWrapper onClick={clickHandler}>
      <StyledCloseButton />
    </StyledCloseButtonWrapper>
  );
};

export default CloseButton;
