import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter basename="/gotapi_react">
        <App />
    </BrowserRouter>
);
