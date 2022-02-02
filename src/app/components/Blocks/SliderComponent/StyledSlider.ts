import styled from 'styled-components';
import tw from 'twin.macro';

export const StyledPaginationWrapper = styled.div`
  ${tw`
    h-10
  `}
`;

export const StyledSliderButton = styled.div`
  ${tw`
    absolute
    flex
    w-12
    h-12
    rounded-full
  `}

  z-index: 1000;
  cursor: pointer;
  top: 50%;
  background-color: #fff;
  transform: translateY(-44px);

  &.prevButton {
    left: 20px;
  }

  &.nextButton {
    right: 20px;
  }
`;
