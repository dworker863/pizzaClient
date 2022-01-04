import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { commonTheme } from './app/commonStyles/theme';
import Header from './app/components/Header/Header';
import { getUsers } from './app/redux/reducers/usersReducer/users';

function App() {
  const dispatch = useDispatch();

  useEffect((): void => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <ThemeProvider theme={commonTheme}>
      <Header />
    </ThemeProvider>
  );
}

export default App;
