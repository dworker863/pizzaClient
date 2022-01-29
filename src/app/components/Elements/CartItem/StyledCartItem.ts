import styled from 'styled-components';
import tw from 'twin.macro';

export const StyledCartItemWrapper = styled.div`
  ${tw`
    relative
    mb-8
  `}
`;
export const StyledCartItem = styled.div`
  ${tw`
    mb-2  
  `}
`;

export const StyledItemTitle = styled.span`
  ${tw`
    relative
    mr-10
    ml-3
    text-sm
  `}
`;

export const StyledCartCloseButtonWrapper = styled.div`
  ${tw`
    absolute
  `}

  top: -10px;
  right: -12px;
`;

export const StyledPriceWrapper = styled.span`
  ${tw`
    flex
    ml-2
  `}
`;

export const StyledItemsCount = styled.span`
  ${tw`
    ml-3
    mr-3
  `}
`;

export const StyledItemsPrice = styled.span`
  ${tw`
    ml-auto
    mr-2
  `}
`;
