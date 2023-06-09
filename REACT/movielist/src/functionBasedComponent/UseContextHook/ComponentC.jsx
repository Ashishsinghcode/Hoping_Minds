import React, { useContext} from 'react'
import { myContext } from './context/Confusion'
import ComponentD from './ComponentD'

export default function ComponentC() {
    const {count,setCount}=useContext(myContext)

  return (
    <div>
      <button onClick={()=>{setCount(count+1)}} className='btn btn-sm btn-primary m-2'>+</button>
      <button onClick={()=>{setCount(count-1)}} className='btn btn-sm btn-primary m-2'>-</button>
      <ComponentD/>
    </div>
  )
}
