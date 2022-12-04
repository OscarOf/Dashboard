import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Cards } from './Card';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Cards price="BTC - 15000 USD" porcentaje="▾12%"/>
        <Cards price="ETH - 1160 USD" porcentaje="▾2.35%"/>
        <Cards price="BNB - 297 USD" porcentaje="▴0.21%"/>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
