
import './index.css'; 
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Toaster } from 'sonner';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Toaster position="top-right" richColors expand />
  </React.StrictMode>
);

