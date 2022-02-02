import { FC } from 'react';
import Slider from '../../Blocks/SliderComponent/Slider';
import TopLine from '../../Blocks/TopLine/TopLine';
import { StyledHeader } from './StyledHeader';

const Header: FC = () => {
  return (
    <StyledHeader>
      <TopLine />
      <Slider />
    </StyledHeader>
  );
};

export default Header;
