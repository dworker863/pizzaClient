import { ThemeProvider } from 'styled-components';
import { commonTheme } from './app/commonStyles/theme';
import Header from './app/components/Sections/Header/Header';
import Category from './app/components/Sections/Category/Category';
import { categories } from './app/utils/staticData';
import Cart from './app/components/Sections/Cart/Cart';
import Container from './app/components/Blocks/Container/Container';
import { StyledCategoryContainer } from './app/components/Sections/Category/StyledCategory';

function App() {
  return (
    <ThemeProvider theme={commonTheme}>
      <Header />
      <Container>
        <Cart />
        <StyledCategoryContainer>
          {categories.map((category) => (
            <Category title={category.title} name={category.name} />
          ))}
        </StyledCategoryContainer>
      </Container>
    </ThemeProvider>
  );
}

export default App;
