import React from 'react';
import App from './App';
import{ createRoot} from 'react-dom/client';

//Creating a root element from react 18 onwards
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App color="green" size="20px"/>);
