import { FC } from 'react';
import { IAnchorProps } from './IAnchor';
import { StyledAnchor } from './StyledAnchor';

const Anchor: FC<IAnchorProps> = ({ text, clickHandler }) => {
  return (
    <StyledAnchor href="http://" onClick={clickHandler}>
      {text}
    </StyledAnchor>
  );
};

export default Anchor;
