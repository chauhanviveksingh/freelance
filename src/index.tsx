import React from 'react';
import ReactDOM from 'react-dom/client'; 
import './styles/tailwind.css';
import App from './components/App';

const rootElement = document.getElementById('root');

const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
