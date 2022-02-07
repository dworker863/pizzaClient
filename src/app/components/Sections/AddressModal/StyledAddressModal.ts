import { IStyledActiveComponent } from './../../../commonInterfaces/IStyledActiveComponent';
import tw from 'twin.macro';
import styled, { css } from 'styled-components';

export const StyledAddressModal = styled.div<IStyledActiveComponent>`
  ${tw`
    absolute
    w-96
    h-80
    p-7
    rounded-2xl
  `}

  z-index: 1000;
  display: none;
  top: 50%;
  left: 50%;
  background-color: #fff;
  transform: translate(-170px, -300px);

  ${({ isActive }) =>
    isActive &&
    css`
      display: block;
    `};
`;

export const StyledAddressModalButtonsWrapper = styled.div`
  ${tw`
    mt-10
  `}
`;
