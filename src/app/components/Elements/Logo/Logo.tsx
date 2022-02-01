import { FC } from 'react';
import { StyledLogo } from './StyledLogo';
import logo from '../../../../assets/images/logo.png';
import { ILogoProps } from './ILogo';

const LogoWrapper: FC<ILogoProps> = ({ clickHandler }) => {
  return (
    <StyledLogo onClick={clickHandler}>
      <img src={logo} alt="Pizza" />
    </StyledLogo>
  );
};

export default LogoWrapper;
