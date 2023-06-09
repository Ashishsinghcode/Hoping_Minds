import React,{useContext} from 'react'
import ComponentB from './ComponentB'
import { myContext } from './context/Confusion'

export default function ComponentA() {
    const {count}=useContext(myContext);
  return (
    <div>
     <h3>Counter : {count}</h3>
     <ComponentB/>
    </div>
  )
}
