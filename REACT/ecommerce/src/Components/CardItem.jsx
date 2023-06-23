import React from 'react'
import { useDispatch } from 'react-redux'
import { removeFromCartAction } from '../redux/action/CartAction'
//import { useSelector } from 'react-redux'

const CardItem = ({cart,itemId,style}) => {
  //const cartValue = useSelector(state=>state)

  const{id,img,name,price}=cart
  const dispatch = useDispatch()
  return (
    
    <>
      <tr style={style}>
        <td style={style}>{itemId+1}</td>
        <td style={style}>{name}</td>
        <td style={style}><img style={{width:'200px'}} src={img} alt='Unable to load'/></td>
        <td style={style}>{price}</td>
        <td><button type='button' className='btn btn-danger rounded-circle' onClick={()=>dispatch(removeFromCartAction(id))} ><i className='fa fa-trash-o'></i></button></td>
      </tr>
    </>
  )
}

export default CardItem
