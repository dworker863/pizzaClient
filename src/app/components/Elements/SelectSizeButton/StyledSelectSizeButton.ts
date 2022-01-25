import styled from 'styled-components';
import tw from 'twin.macro';

export const StyledSelectSizeItemsWrapper = styled.div`
  ${tw`
    rounded-3xl
    mb-10
  `}

  width: max-content;
  border: 1px solid ${(props) => props.theme.colors.superLightGrey};
`;
