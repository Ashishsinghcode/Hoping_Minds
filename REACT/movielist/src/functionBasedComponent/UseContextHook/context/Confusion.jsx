import React ,{ createContext, useState } from "react";

export const myContext =createContext();

const Confusion = (props) => {
    // const [pearls,setPearls]=useState('Moti');
    const[count,setCount]=useState(2);
    //const[msg]=useState('Hello');
  return (
    <myContext.Provider value={{count,setCount}}>
        {props.children}
    </myContext.Provider>
  )
}

export default Confusion
