import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/storeSetup';
import { ThemeProvider } from 'react-jss';
import Header from './components/Header';
import Footer from './components/Footer';
import Documents from './components/Documents';
import theme from './utils/theme';

ReactDOM.render((
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Header />
      <Documents />
      <Footer />
    </ThemeProvider>
  </Provider>
), document.getElementById('root'));
