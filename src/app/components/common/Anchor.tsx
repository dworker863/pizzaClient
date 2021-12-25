import { FC, MouseEvent } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const StyledAnchor = styled.a`
  ${tw`
    
  `}

  color: ${(props) => props.theme.colors.primary};
`;

interface IAnchorProps {
  text: string;
  clickHandler: (event: MouseEvent<HTMLAnchorElement>) => void;
}

const Anchor: FC<IAnchorProps> = ({ text, clickHandler }) => {
  return (
    <StyledAnchor href="http://" onClick={clickHandler}>
      {text}
    </StyledAnchor>
  );
};

export default Anchor;
