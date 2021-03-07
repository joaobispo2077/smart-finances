import React, { useState } from "react";
import { ThemeProvider } from 'styled-components';
import { theme as themeUI } from './Components/UI/themes';
import { Switcher } from './Components/UI';
import Cabecalho from "./Components/Cabecalho";
import Container from "./Components/Container";
import { GlobalStyle } from './Components/GlobalStyle';
import SwitcherTheme from './Components/SwitcherTheme/index';
function App() {
  const [theme, setTheme] = useState(false);

  const handleToggleTheme = () => {
    setTheme((theme) => !theme);
  }
  return (
    <>
      <ThemeProvider theme={theme ? themeUI.dark : themeUI.light}>
        <GlobalStyle />
        <Switcher onClick={handleToggleTheme}>
          <SwitcherTheme theme={theme} />
        </Switcher>
        <Cabecalho />
        <Container />
      </ThemeProvider>
    </>
  );
}

export default App;
