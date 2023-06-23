import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function Multiplier() {
    const dispatch =useDispatch()
    const count =useSelector((state)=>state.multiply)  
  return (

    <div>
       <div className='row'>
            <h1>Redux Counter</h1>
                <h3>{count}</h3>
            
            <div className='col-md-1'>
                <button className='btn btn-primary' onClick={()=>dispatch({type:'multiTwelve',payload:12})}>x 12</button>
            </div>
            <div className='col-md-1'>
                <button className='btn btn-primary' onClick={()=>dispatch({type:'multiZero',payload:0})}>x 0</button>
            </div>
            <div className='col-md-1'>
                <button className='btn btn-primary' onClick={()=>dispatch({type:'divTwo',payload:2})}>/ 2</button>
            </div>
            <div className='col-md-1'>
                <button className='btn btn-primary' onClick={()=>dispatch({type:'divFour',payload:4})}>/ 4</button>
            </div>
            
            <div className='col-md-1'>
                <button className='btn btn-danger' onClick={()=>dispatch({type:'OUT'})}>Logout</button>

            </div>
            
        </div>
    </div>
  )
}
