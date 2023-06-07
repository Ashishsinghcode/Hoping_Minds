import 'bootstrap/dist/css/bootstrap.css';
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Apps from './App';
import {Welcome,First2} from './component/first';
import Counter from './component/counter';
import reportWebVitals from './reportWebVitals';

//let reactD=require("react")
//let reactDOM=require("react-dom")
//ReactDOM.render(<Counter/>,document.getElementById('root'));
 const root = ReactDOM.createRoot(document.getElementById('root'));
 
 root.render(
   //<React.StrictMode>
     <Apps/>
   //</React.StrictMode>
 );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
