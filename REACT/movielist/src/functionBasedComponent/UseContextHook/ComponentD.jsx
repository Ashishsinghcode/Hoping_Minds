import React, { useContext, useState } from 'react'
import { myContext } from './context/Confusion'

const mystyle={
    
}
export default function ComponentD() {
    const {count}=useContext(myContext)
    const arr=[1,2,3,4,5,6,7,8,9,10]
return(
    <>
    {arr.map((item)=>{
        return(
            <p>{count} x {item} = {count * item}</p>
        )
    })}
    </>
)
}
