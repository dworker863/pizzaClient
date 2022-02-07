import { forwardRef } from 'react';
import Slider from '../../Blocks/SliderComponent/Slider';
import TopLine from '../../Blocks/TopLine/TopLine';

const Header = forwardRef<HTMLDivElement>((props, ref) => (
  <header ref={ref}>
    <TopLine />
    <Slider />
  </header>
));

export default Header;
