import React, { useState } from 'react'
import { addToCartAction } from '../redux/action/CartAction'
import { useDispatch } from 'react-redux'

const ProductCard = ({item}) => {
  const [cart,setCart]=useState('Add')
  const [visiblity,setVisiblity]=useState()
  const {id,img,name,price}=item
  const dispatch = useDispatch();
  const setCartValue= ()=>{
    setCart('Added to Cart')
    setVisiblity('disabled')

  }
  return (
    <>
          
            <div id={id} className="card" style={{ height: "330px" }}>
              <img src={img}  className="card-img-top img-fluid" style={{position:'absolute' }} alt="Unable to load" />
              <div className="card-body" style={{marginTop:'190px'}}>
                <h5 className="card-title">{name}</h5>
                <p className="card-text">Price : Rs{price}</p>
                <button type='button' onClick={()=>dispatch(addToCartAction(id),setCartValue())} className={`btn btn-primary ${visiblity}`}>{cart}</button>
              </div>
            </div>
    </>
  )
}

export default ProductCard
