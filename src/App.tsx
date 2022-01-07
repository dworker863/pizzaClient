import { ThemeProvider } from 'styled-components';
import { commonTheme } from './app/commonStyles/theme';
import Header from './app/components/Header/Header';
import Category from './app/components/Category/Category';

function App() {
  return (
    <ThemeProvider theme={commonTheme}>
      <Header />
      <Category title="Пицца" />
    </ThemeProvider>
  );
}

export default App;
