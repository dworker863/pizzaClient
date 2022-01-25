import { useState, FC } from 'react';
import SelectSizeItem from '../SelectSizeItem/SelectSizeItem';
import { StyledSelectSizeItemsWrapper } from './StyledSelectSizeButton';

const SelectSizeButton: FC = () => {
  const [activeElement, setActiveElement] = useState(0);
  const items = ['Традиционное', 'Тонкое'];

  const itemClickHandler = (index: number): void => {
    setActiveElement(index);
  };
  return (
    <StyledSelectSizeItemsWrapper>
      {items.map((item, index) => (
        <SelectSizeItem
          text={item}
          isActive={index === activeElement ? true : false}
          clickHandler={() => itemClickHandler(index)}
        />
      ))}
    </StyledSelectSizeItemsWrapper>
  );
};

export default SelectSizeButton;
