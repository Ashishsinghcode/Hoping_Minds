//import logo from './logo.svg';
import Counter from './component/counter';
import React from 'react'

import './App.css';
import {useState } from 'react';
function Apps() {
  const [show,setShow]=useState(true)
  return (
    <>
    <button onClick={()=>setShow(false)}>Hide</button>
    {show?<Counter />:<h1>Hidden</h1>}
    </>
  );
}

export default Apps;
