import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function ReduxLogin() {
    // const login = useSelector((state)=>state.login)
    const dispatch =useDispatch()
  return (
    <div>
        <h1>Login Component</h1>
      <button className='btn btn-danger' onClick={()=>dispatch({type:'IN'})}>Login</button>
    </div>
  )
}
