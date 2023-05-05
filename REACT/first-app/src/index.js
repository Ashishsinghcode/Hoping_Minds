import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Apps from './App';
import {Welcome,First2} from './component/first';
import reportWebVitals from './reportWebVitals';

//let reactD=require("react")
//let reactDOM=require("react-dom")
ReactDOM.render(<Welcome />,document.getElementById('root'));
{/* <App />
 const root = ReactDOM.createRoot(document.getElementById('root'));
 root.render(
   <React.StrictMode>
     <App />
   </React.StrictMode>
 ); */}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
