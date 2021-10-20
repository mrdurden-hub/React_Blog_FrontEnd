import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import TopLogo from './components/TopLogo';
import Routes from './routes';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import GlobalStyles from './styles/GlobalStyles';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <TopLogo />
      <Navbar />
      <Routes />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
