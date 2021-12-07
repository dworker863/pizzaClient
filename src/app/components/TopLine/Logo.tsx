import { FC } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import logo from '../../../assets/images/logo.png';

const Logo = styled.div`
  ${tw`
    cursor-pointer
  `}

  img {
    width: 73px;
    margin-top: -10px;
  }
`;

const LogoWrapper: FC = () => {
  return (
    <Logo>
      <img src={logo} alt="Pizza" />
    </Logo>
  );
};

export default LogoWrapper;
