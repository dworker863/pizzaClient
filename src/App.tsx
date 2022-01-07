import { ThemeProvider } from 'styled-components';
import { commonTheme } from './app/commonStyles/theme';
import Header from './app/components/Header/Header';
import Category from './app/components/Category/Category';
import { useSelector } from 'react-redux';
import { RootState } from './app/redux/store';

function App() {
  const category = useSelector((state: RootState) => state.categories);

  return (
    <ThemeProvider theme={commonTheme}>
      <Header />
      {category.category.map((category) => (
        <Category title={category} />
      ))}
    </ThemeProvider>
  );
}

export default App;
