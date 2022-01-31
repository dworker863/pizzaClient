import { FC } from 'react';
import { categories } from '../../../utils/staticData';
import { StyledCategoryMenu } from './StyledCategoryMenu';

const CategoryMenu: FC = () => {
  return (
    <StyledCategoryMenu>
      {categories.map((category) => (
        <div>{category.title}</div>
      ))}
    </StyledCategoryMenu>
  );
};

export default CategoryMenu;
