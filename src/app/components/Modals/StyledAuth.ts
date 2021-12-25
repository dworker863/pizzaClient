import styled from 'styled-components';
import tw from 'twin.macro';

export const StyledAuthModalMobile = styled.div`
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

export const StyledAuthModalTablet = styled.div`
  ${tw`
    z-20
    right-0
    absolute
    w-96
    p-8
    pt-16
    rounded-lg
    text-sm
    lg:right-10
  `}

  padding-top: 68px;
  box-shadow: 0 2px 12px 0 rgb(41 44 51 / 20%);
  background-color: #fff;
  font-family: Roboto, sans-serif;
`;

export const StyledAuthModal = styled.div`
  ${tw`
    z-20
    absolute    
    text-sm
    px-5
    py-8
    rounded-xl
  `}

  top: 52px;
  right: 140px;
  width: 340px;
  padding-top: 48px;
  box-shadow: 0 2px 12px 0 rgb(41 44 51 / 20%);
  background-color: #fff;
  font-family: Roboto, sans-serif;
`;

export const StyledAuthButtonsWrapper = styled.div`
  ${tw`
    flex
    justify-between
    mt-10
  `}

  line-height: 44px;
`;
