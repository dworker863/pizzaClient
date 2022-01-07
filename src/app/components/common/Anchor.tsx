import { FC } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { IAnchorProps } from '../../interfaces/authForm';

const StyledAnchor = styled.a`
  ${tw`
    
  `}

  color: ${(props) => props.theme.colors.primary};
`;

const Anchor: FC<IAnchorProps> = ({ text, clickHandler }) => {
  return (
    <StyledAnchor href="http://" onClick={clickHandler}>
      {text}
    </StyledAnchor>
  );
};

export default Anchor;
