import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client'; // Import ReactDOM
import { Provider } from 'react-redux';
import './index.css';
import App from './App.jsx';
import Store from './Store.js'; // Import your store

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={Store}> {/* Wrap App with Provider */}
      <App />
    </Provider>
  </StrictMode>
);