import React from 'react'; // Necessário para versões anteriores ao React 17
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
