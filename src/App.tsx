import { ThemeProvider } from 'styled-components';
import { commonTheme } from './app/commonStyles/theme';
import Header from './app/components/Header/Header';
import Category from './app/components/Category/Category';
import { useSelector } from 'react-redux';
import { RootState } from './app/redux/store';

function App() {
  const categories = useSelector((state: RootState) => state.categories);

  console.log(categories);

  return (
    <ThemeProvider theme={commonTheme}>
      <Header />
      {categories.items.map((category) => (
        <Category title={category.title} name={category.name} />
      ))}
    </ThemeProvider>
  );
}

export default App;
