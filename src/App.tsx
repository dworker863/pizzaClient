import { ThemeProvider } from 'styled-components';
import { commonTheme } from './app/commonStyles/theme';
import Header from './app/components/Header/Header';

function App() {
  return (
    <ThemeProvider theme={commonTheme}>
      <Header />
    </ThemeProvider>
  );
}

export default App;
