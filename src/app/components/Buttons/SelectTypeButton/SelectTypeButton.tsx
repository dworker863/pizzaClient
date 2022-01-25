import { useState, FC } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import SelectItem from './SelectItem';

const StyledSelectItemsWrapper = styled.div`
  ${tw`
    rounded-3xl
    mb-10
  `}

  width: max-content;
  border: 1px solid ${(props) => props.theme.colors.superLightGrey};
`;

const SelectType: FC = () => {
  const [activeElement, setActiveElement] = useState(0);
  const items = ['Традиционное', 'Тонкое'];

  const itemClickHandler = (index: number): void => {
    setActiveElement(index);
  };
  return (
    <StyledSelectItemsWrapper>
      {items.map((item, index) => (
        <SelectItem
          text={item}
          isActive={index === activeElement ? true : false}
          clickHandler={() => itemClickHandler(index)}
        />
      ))}
    </StyledSelectItemsWrapper>
  );
};

export default SelectType;
