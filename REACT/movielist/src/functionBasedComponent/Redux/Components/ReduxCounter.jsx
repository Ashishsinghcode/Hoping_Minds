import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { counterReducer } from '../Reducer/CounterReducer'

export default function ReduxCounter() {
    const dispatch =useDispatch()
    const count =useSelector((state)=>state)    
    return (
        <div className='row'>
            <h1>Redux Counter</h1>
            <div className='col-md-1'>
                <button className='btn btn-primary' onClick={()=>dispatch({type:'INC'})}>+</button>
            </div>
            <div className='col-md-1'>
                <h3>{count}</h3>
            </div>
            <div className='col-md-1'>
                <button className='btn btn-primary' onClick={()=>dispatch({type:'DEC'})}>-</button>
            </div>
        </div>
    )
}
