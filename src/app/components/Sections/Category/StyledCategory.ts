import styled from 'styled-components';
import tw from 'twin.macro';

export const StyledCategoryContainer = styled.div`
  ${tw`    
    xl:w-3/4
  `}
`;

export const StyledCategoryWrapper = styled.div`
  ${tw`
  `}
`;

export const StyledCategory = styled.h2`
  ${tw`
    pb-10
    text-2xl
    font-bold
  `}

  font-family: Montserrat, sans-serif;
  color: ${(props) => props.theme.colors.brown};
`;

export const StyledGoodsWrapper = styled.div`
  ${tw`
    flex
    flex-wrap
    gap-2
  `}
`;
