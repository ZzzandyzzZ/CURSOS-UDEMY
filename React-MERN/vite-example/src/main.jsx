import React from 'react';
import ReactDOM from 'react-dom/client'
import { FirstApp } from './FirstApp'
// import { CounterApp } from './CounterApp'
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <CounterApp value={ 26 } /> */}
    <FirstApp title="Hola a todos"/>
  </React.StrictMode>
);