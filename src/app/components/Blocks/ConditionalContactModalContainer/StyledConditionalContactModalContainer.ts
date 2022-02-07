import styled, { css } from 'styled-components';
import tw from 'twin.macro';
import { IStyledActiveComponent } from '../../../commonInterfaces/IStyledActiveComponent';

export const StyledContactModal = styled.div`
  ${tw`
    z-20
    cursor-pointer
    ml-auto
    mr-5
    mt-2
  `}
`;

export const StyledContactModalMobileWrapper = styled.div<IStyledActiveComponent>`
  ${tw`
    z-20
    absolute
    top-0
    w-screen
    h-screen
    p-8
    pt-24
    rounded-lg
    bg-white
  `}

  box-shadow: 0 2px 12px 0 rgb(41 44 51 / 20%);
  transition: all 0.15s ease-in-out;
  ${({ isActive }) =>
    isActive
      ? css`
          opacity: 1;
          display: block;
        `
      : css`
          opacity: 0;
          display: none;
        `}
`;

export const StyledContactModalTabletWrapper = styled.div`
  ${tw`
    z-20
    absolute
    right-0
    w-96
    p-8
    pt-24
    rounded-lg
    bg-white
    lg:right-10
  `}

  box-shadow: 0 2px 12px 0 rgb(41 44 51 / 20%);
`;
