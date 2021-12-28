import { FC, MouseEvent } from 'react';
import { HamburgerWrapper, StyledHamburger } from './StyledHamburger';

interface IHamburgerProps {
  hamburgerActive: boolean;
  clickHandler: (event: MouseEvent<HTMLDivElement>) => void;
}

const Hamburger: FC<IHamburgerProps> = ({ clickHandler, hamburgerActive }) => {
  return (
    <HamburgerWrapper onClick={clickHandler}>
      <StyledHamburger isActive={hamburgerActive} />
    </HamburgerWrapper>
  );
};

export default Hamburger;
