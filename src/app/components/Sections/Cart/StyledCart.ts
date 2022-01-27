import styled, { css } from 'styled-components';
import tw from 'twin.macro';
import { IStyledActiveComponent } from '../../../commonInterfaces/IStyledActiveComponent';

export const StyledCart = styled.div`
  ${tw`
    relative
    w-80
    h-8
  `}

  margin-top: 72px;
  background-color: #fff;
  font-family: Montserrat;
  color: ${(props) => props.theme.colors.brown};
`;

export const StyledCartLine = styled.div`
  ${tw`
    absolute
    `}

  z-index: 1;
  top: 0;
  width: 100%;
  height: 4px;
  background-color: ${(props) => props.theme.colors.red};
`;

export const StyledCartCircle = styled.div`
  ${tw`
    absolute    
    rounded-full
  `}

  z-index: 5;
  top: -52px;
  left: 50%;
  width: 104px;
  height: 104px;
  transform: translate(-52px);
  background-color: ${(props) => props.theme.colors.red};

  &::before {
    position: absolute;
    top: 4px;
    left: 4px;
    content: '';
    width: 96px;
    height: 96px;
    border-radius: 50%;
    background-color: #fff;
  }
`;

export const StyledCartIcon = styled.span`
  ${tw`
    relative
    flex
    text-3xl
  `}

  width: 100%;
  height: 100%;
  color: ${(props) => props.theme.colors.red};
`;

export const StyledCartTopLine = styled.div`
  ${tw`
    relative
    p-5
  `}

  top: 4px;
  z-index: 10;
  background-color: #fff;
`;

export const StyledCartToggler = styled.div`
  ${tw`
    flex
  `}

  cursor: pointer;
`;

export const StyledCartTitle = styled.h2`
  ${tw`
    mr-2
  `}
`;

export const StyledCartTContent = styled.p<IStyledActiveComponent>`
  ${tw`
    px-5
    h-80
  `}

  overflow: hidden;
  background-color: #fff;
  transition: all 0.4s;

  ${({ isActive }) =>
    !isActive &&
    css`
      height: 0px;
    `}
`;
