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
import { useEffect, useState } from 'react';
import Scroll from 'react-scroll';
import NavbarFixed from './app/components/Blocks/NavbarFixed/NavbarFixed';
import Navbar from './app/components/Blocks/Navbar/Navbar';

const Element = Scroll.Element;

function App() {
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);
  }, []);

  const categories: ICategory[] = useSelector(
    (state: RootState) => state.categories,
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const scrollHandler = () => {
    setScrollTop(document.documentElement.scrollTop);
  };

  return (
    <ThemeProvider theme={commonTheme}>
      <NavbarFixed items={categories} position={scrollTop} />
      <Header />
      <Container>
        <Navbar items={categories} />
      </Container>
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
