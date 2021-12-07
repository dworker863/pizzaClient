import { FC } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const StyledCategoryList = styled.div`
  ${tw`
  mt-2
  `}
`;

interface CategoryListProps {
  categories?: string[];
}

const CategoryList: FC<CategoryListProps> = () => {
  return (
    <StyledCategoryList>
      {/* {categories.map((category) => category)} */}
    </StyledCategoryList>
  );
};

export default CategoryList;
