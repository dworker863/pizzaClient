import { FC } from 'react';
import { IStyledActiveComponent } from '../../../commonInterfaces/IStyledActiveComponent';
import { StyledToggleButton } from './StyledToggleButton';

const ToggleButton: FC<IStyledActiveComponent> = ({ isActive }) => {
  return <StyledToggleButton isActive={isActive}></StyledToggleButton>;
};

export default ToggleButton;
