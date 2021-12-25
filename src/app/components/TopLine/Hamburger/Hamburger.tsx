import { FC, MouseEvent } from 'react';
import { HamburgerWrapper, StyledHamburger } from './StyledHamburger';

interface HamburgerProps {
  hamburgerActive: boolean;
  clickHandler: (event: MouseEvent<HTMLDivElement>) => void;
}

const Hamburger: FC<HamburgerProps> = ({ clickHandler, hamburgerActive }) => {
  return (
    <HamburgerWrapper onClick={clickHandler}>
      <StyledHamburger isActive={hamburgerActive} />
    </HamburgerWrapper>
  );
};

export default Hamburger;
