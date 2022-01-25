import { ThemeProvider } from 'styled-components';
import { commonTheme } from './app/commonStyles/theme';
import Header from './app/components/Sections/Header/Header';
import Category from './app/components/Sections/Category/Category';
import { categories } from './app/utils/staticData';

function App() {
  return (
    <ThemeProvider theme={commonTheme}>
      <Header />
      {categories.map((category) => (
        <Category title={category.title} name={category.name} />
      ))}
    </ThemeProvider>
  );
}

export default App;
