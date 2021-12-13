import { FC, MouseEvent } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const HamburgerWrapper = styled.div`
  ${tw`
    cursor-pointer
    `}

  padding-top: 26px;

  &:hover {
    div {
      &:before,
      &:after {
        background-color: rgba(5, 150, 105);
      }
      background-color: rgba(5, 150, 105);
    }
  }
`;

const StyledHamburger = styled.div`
  ${tw`  
    relative
    w-6
    h-1
    bg-gray-400
    transition-all
  `}

  &:before, &:after {
    content: '';
    position: absolute;
    display: block;
    width: 24px;
    height: 4px;
    background-color: rgba(156, 163, 175);
    transition: all 0.15s;
  }

  &:before {
    top: -7px;
  }

  &:after {
    top: 7px;
  }

  &.active {
    transform: rotate(45deg);

    &:before {
      display: none;
    }

    &:after {
      top: 0;
      transform: rotate(-90deg);
    }
  }
`;

interface HamburgerProps {
  hamburgerActive: boolean;
  clickHandler: (event: React.MouseEvent<HTMLDivElement>) => void;
}

const Hamburger: FC<HamburgerProps> = ({ clickHandler, hamburgerActive }) => {
  return (
    <HamburgerWrapper onClick={clickHandler}>
      <StyledHamburger className={hamburgerActive ? 'active' : ''} />
    </HamburgerWrapper>
  );
};

export default Hamburger;
