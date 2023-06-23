import React from 'react'
import Layout from '../Layout'
import products from '../Data'
import ProductCard from '../Components/ProductCard'
const Product = () => {
  return (
    <Layout>
      {products.map((item, index) => {
        return (
                <div key={index}  className='col-md-3 m-1'>
                  <ProductCard key={index} item={item} />
                </div>
        )
      })}
    </Layout>
  )
}

export default Product
