import { FC } from 'react';
import SelectSizeItem from '../SelectSizeItem/SelectSizeItem';
import { ISelectSizeButtonProps } from './ISelectSizeButton';
import { StyledSelectSizeItemsWrapper } from './StyledSelectSizeButton';

const SelectSizeButton: FC<ISelectSizeButtonProps> = ({ id, clickHandler }) => {
  const sizes = ['23 см', '30 см', '35 см', '40 см'];

  return (
    <StyledSelectSizeItemsWrapper>
      {sizes.map((size, index) => (
        <SelectSizeItem
          size={size}
          isActive={index === id ? true : false}
          clickHandler={() => clickHandler(index)}
        />
      ))}
    </StyledSelectSizeItemsWrapper>
  );
};

export default SelectSizeButton;
