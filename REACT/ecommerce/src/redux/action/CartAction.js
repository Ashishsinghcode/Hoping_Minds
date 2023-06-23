import products from '../../Data'

export const addToCartAction=(id)=>{
    let targetItems= products.filter(product=>product.id === id)
    return {type:'ADD',payload:targetItems[0]}

}
export const removeFromCartAction=(id)=>{
    console.log(id)
    let cartData = localStorage.getItem('cartValue')
    if(cartData !== null){
        let updateCartData= JSON.parse(localStorage.getItem('cartValue')).filter(product=>product.id !== id)

        return {type:'REMOVE',payload:updateCartData}
    }

}