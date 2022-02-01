import { ThemeProvider } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { commonTheme } from './app/commonStyles/theme';
import Header from './app/components/Sections/Header/Header';
import Category from './app/components/Sections/Category/Category';
import Cart from './app/components/Sections/Cart/Cart';
import Container from './app/components/Blocks/Container/Container';
import { StyledCategoryContainer } from './app/components/Sections/Category/StyledCategory';
import { ICategory } from './app/components/Sections/Category/ICategory';
import { RootState } from './app/redux/store';
import { getCategories } from './app/redux/reducers/categoriesReducer/categoriesReducer';
import { useEffect } from 'react';
import Scroll from 'react-scroll';

const Element = Scroll.Element;

function App() {
  const categories: ICategory[] = useSelector(
    (state: RootState) => state.categories,
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <ThemeProvider theme={commonTheme}>
      <Header categories={categories} />
      <Container>
        <Cart />
        <StyledCategoryContainer>
          {categories.map((category, index) => (
            <Element name={category.title}>
              <Category
                key={index + category.name}
                title={category.title}
                name={category.name}
              />
            </Element>
          ))}
        </StyledCategoryContainer>
      </Container>
    </ThemeProvider>
  );
}

export default App;
