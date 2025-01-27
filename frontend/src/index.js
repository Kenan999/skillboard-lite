import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';  // Import BrowserRouter
import reportWebVitals from './reportWebVitals';

// Only wrap <App /> with BrowserRouter in index.js
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>  {/* Wrap the App component here */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
