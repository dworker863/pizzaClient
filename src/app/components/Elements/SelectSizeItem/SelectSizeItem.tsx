import { FC } from 'react';
import { ISelectItemProps } from './ISelectSizeItem';
import { StyledSelectSizeItem } from './StyledSelectSizeItem';

const SelectSizeItem: FC<ISelectItemProps> = ({
  text,
  isActive,
  clickHandler,
}) => {
  return (
    <StyledSelectSizeItem onClick={clickHandler} isActive={isActive}>
      {text}
    </StyledSelectSizeItem>
  );
};

export default SelectSizeItem;
