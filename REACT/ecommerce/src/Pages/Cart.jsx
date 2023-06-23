import React, { useEffect, useState } from 'react'
import Layout from '../Layout'
import { useSelector } from 'react-redux'
import CardItem from '../Components/CardItem'
import NotFound from './NotFound'

const Cart = () => {
  const myStyle={
    border:'2px solid black'
    
  }
  const [total,setTotal]=useState(0)
  //const cartValue = JSON.parse(localStorage.getItem('cartValue'))
  const cartValue = useSelector(state=>state)
  var a=0
  useEffect(()=>{
    setTotal(a)

  })
  return (
    <Layout>
      
     {cartValue.length !== 0?
      <table style={myStyle}>
      <tbody>
        <tr style={myStyle}>
          <th style={myStyle}>Sno.</th>
          <th style={myStyle}>Images</th>
          <th style={myStyle}>Name</th>
          <th style={myStyle}>Price</th>
        </tr>
        
        {cartValue.map((item,index)=>{
           a=a+item.price
          return(
            <CardItem cart={item} key={index} itemId={index} style={myStyle}/>
          )
      })}
      <tr>
        <td><h3><strong>Total : Rs {total}</strong></h3></td>
      </tr>
      </tbody>
    </table>
    :
    <NotFound/>
    }
     
    </Layout>
  )
}

export default Cart
