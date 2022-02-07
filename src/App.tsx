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
import { createContext, useEffect, useRef, useState } from 'react';
import Scroll from 'react-scroll';
import NavbarFixed from './app/components/Blocks/NavbarFixed/NavbarFixed';
import Navbar from './app/components/Blocks/Navbar/Navbar';
import Footer from './app/components/Sections/Footer/Footer';
import AddressModal from './app/components/Sections/AddressModal/AddressModal';

const Element = Scroll.Element;
export const AddressModalContext = createContext<any>(null);

function App() {
  const [scrollTop, setScrollTop] = useState(0);
  const [addressModalActive, setAddressModalActive] = useState(false);

  const headerRef = useRef<HTMLDivElement>(null);

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

  const scrollHandler = (): void => {
    setScrollTop(document.documentElement.scrollTop);
  };

  const addressButtonCLickHandler = (): void => {
    console.log(1);
    setAddressModalActive(!addressModalActive);
  };

  return (
    <ThemeProvider theme={commonTheme}>
      <AddressModal isActive={addressModalActive} />
      <NavbarFixed
        items={categories}
        isActive={
          headerRef.current && headerRef.current.offsetHeight < scrollTop
        }
      />
      <AddressModalContext.Provider value={addressButtonCLickHandler}>
        <Header ref={headerRef} />
      </AddressModalContext.Provider>
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
      <Footer />
    </ThemeProvider>
  );
}

export default App;
