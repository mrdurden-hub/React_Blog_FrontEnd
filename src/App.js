import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { BsToggleOff, BsToggleOn } from 'react-icons/bs';
import TopLogo from './components/TopLogo';
import Routes from './routes';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import GlobalStyles from './styles/GlobalStyles';
import { lightTheme, darkTheme } from './styles/theme';
import { Container } from './App.styles';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    if (theme === 'light') {
      window.localStorage.setItem('theme', 'dark');
      setTheme('dark');
    } else {
      window.localStorage.setItem('theme', 'light');
      setTheme('light');
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    // eslint-disable-next-line no-unused-expressions
    localTheme && setTheme(localTheme);
  }, []);

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyles />
        <TopLogo />
        <Container>
          {theme === 'light' ? <BsToggleOff size={28} type="submit" onClick={toggleTheme}>Click me</BsToggleOff> : <BsToggleOn size={28} type="submit" onClick={toggleTheme}>Click me</BsToggleOn>}
        </Container>
        <Navbar />
        <Routes />
        <Footer />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
