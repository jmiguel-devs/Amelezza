import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { QueryClient, QueryClientProvider } from "react-query";
import { CartProvider } from "react-use-cart";
import { Provider } from "react-redux";
import store from './Context/Store/Store.js'

const client = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <CartProvider>
        <QueryClientProvider client={client}>
          <App />
        </QueryClientProvider>
      </CartProvider>
    </Provider>
  </React.StrictMode>
);


