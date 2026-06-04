import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Patch from './Patch.jsx';
import Put from './Put.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div>
      <App />
      <Patch />
      <Put />
    </div>
  </React.StrictMode>
);