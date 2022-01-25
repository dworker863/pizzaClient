import { FC } from 'react';
import { ISelectItemProps } from './ISelectSizeItem';
import { StyledSelectSizeItem } from './StyledSelectSizeItem';

const SelectSizeItem: FC<ISelectItemProps> = ({
  size,
  isActive,
  clickHandler,
}) => {
  return (
    <StyledSelectSizeItem onClick={clickHandler} isActive={isActive}>
      {size}
    </StyledSelectSizeItem>
  );
};

export default SelectSizeItem;
