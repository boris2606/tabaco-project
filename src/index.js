import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './reset.scss';
import App from './App';
import Header from './components/header/Header';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from './reduxToolkit/reduxStore';
import Footer from './components/footer/Footer';
import { ChakraProvider } from '@chakra-ui/react'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <Provider store={store}>
        <ChakraProvider>
          <Header />
          <App />
          <Footer />
        </ChakraProvider>
      </Provider>
    </BrowserRouter>
);
