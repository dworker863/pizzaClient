import styled from 'styled-components';
import tw from 'twin.macro';

export const StyledContactModalItem = styled.li`
  ${tw`
    flex
    items-center
    justify-between
    py-4
    px-2
    border-t
  `}

  border-color: rgba(${(props) => props.theme.colors.lightGrey}, .5);
`;
