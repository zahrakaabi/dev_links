/* -------------------------------------------------------- */
/*                        DEPENDENCIES                      */
/* -------------------------------------------------------- */
// Packages
import React from 'react';
import ReactDOM from 'react-dom/client';

// UI Local Components
import App from './App.jsx';

// Styles
import './App.scss';

/* -------------------------------------------------------- */
/*                         COMPONENT                        */
/* -------------------------------------------------------- */
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);