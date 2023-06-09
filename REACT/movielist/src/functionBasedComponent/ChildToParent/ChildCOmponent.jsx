import React, { useState } from 'react'

export default function ChildCOmponent(props) {
    const[msg,setMsg]=useState('Hello')

    props.parentfunction(msg)
  return (
    <div>
      
    </div>
  )
}
