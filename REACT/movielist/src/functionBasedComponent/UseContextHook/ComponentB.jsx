import React,{useContext} from 'react'
import ComponentC from './ComponentC'
import { myContext } from './context/Confusion'

export default function ComponentB() {
    const {count}=useContext(myContext)
  return (
    <div>
      <h3>Counter Double : {count *2}</h3>
      <ComponentC/>

    </div>
  )
}
