import { FC } from 'react';
import { IToggleButton } from './IToggleButton';
import { StyledToggleButton } from './StyledToggleButton';

const ToggleButton: FC<IToggleButton> = ({ isActive }) => {
  return <StyledToggleButton isActive={isActive}></StyledToggleButton>;
};

export default ToggleButton;
