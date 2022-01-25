import { FC } from 'react';
import styled, { css } from 'styled-components';
import tw from 'twin.macro';
import { ISelectItemProps } from '../../../interfaces/selectItem';
import { IStyledSelectItemProps } from '../../../interfaces/selecType';

const StyledSelectItem = styled.div<IStyledSelectItemProps>`
  ${tw`
    inline-block
    rounded-3xl
    p-3
    text-sm
  `}

  cursor: pointer;
  color: ${(props) => props.theme.colors.brown};

  ${({ isActive }) =>
    isActive &&
    css`
      background-color: ${(props) => props.theme.colors.superLightGrey};
    `}
`;

const SelectItem: FC<ISelectItemProps> = ({ text, isActive, clickHandler }) => {
  return (
    <StyledSelectItem onClick={clickHandler} isActive={isActive}>
      {text}
    </StyledSelectItem>
  );
};

export default SelectItem;
