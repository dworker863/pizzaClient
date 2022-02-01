import { FC } from 'react';
import Container from '../../Blocks/Container/Container';
import { StyledCopyrights, StyledFooter } from './StyledFooter';

const Footer: FC = () => {
  return (
    <StyledFooter>
      <Container>
        <StyledCopyrights>© Copyright 2022 dworker.</StyledCopyrights>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
