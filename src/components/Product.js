import React from 'react'
import { ProductData } from './ProductsData'
import Cart from './Cart'

const Product = () => {
  return (
    <div className='theProducts' style={{backgroundColor:"rgb(238 238 238 / 55%)"}}>
        <div className='container'>
          <div className='row'>
            {ProductData.map((product)=>{
              return(
            <div className="col-lg-4 col-md-6 col-sm-12" key={product.id}>
                <Cart product={product} className="w-100"/>
              </div>
              )
            })}
          </div>
        </div>
    </div>
  )
}

export default Product