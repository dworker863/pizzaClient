import { FC } from 'react';
import Slider from '../../Blocks/SliderComponent/Slider';
import TopLine from '../../Blocks/TopLine/TopLine';

const Header: FC = () => {
  return (
    <header>
      <TopLine />
      <Slider />
    </header>
  );
};

export default Header;
