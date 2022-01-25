import { FC } from 'react';
import { StyledLogo } from './StyledLogo';
import logo from '../../../../assets/images/logo.png';

const LogoWrapper: FC = () => {
  return (
    <StyledLogo>
      <img src={logo} alt="Pizza" />
    </StyledLogo>
  );
};

export default LogoWrapper;
