import { ThemeProvider } from 'styled-components';

import { Home } from './pages/Home';

import { GlobalStyles } from './styles/global'
import theme from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Home />
    </ThemeProvider>
  );
}

export default App;
