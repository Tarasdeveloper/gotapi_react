import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter basename="/gotapi_react">
        <App />
    </BrowserRouter>,
    document.getElementById('root')
);
