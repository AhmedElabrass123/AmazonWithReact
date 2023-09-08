import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faBasketShopping, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import React, { useContext } from 'react'
import { theContext } from './StateProvider';
import { ProductData } from './ProductsData';

const Cart = ({product}) => {
  const [{basket},dispatch]=useContext(theContext);
   const addToBasket=()=>{
            dispatch({
                type:"ADD_TO_BASKET",
                item:{
                    id:product.id,
                    desc:product.desc,
                    img:product.img,
                    rating:product.rating,
                    price:product.price
                }
            })

   }
  return (
    <>
       <div className='cart mb-3 p-3'  key={product.id}>
                <div  className='w-100 text-center p-3' style={{backgroundColor:"white",
                boxShadow:"0px 0px 4px rgba(0,0,0,0.6)"}}>
                    <p className='desc text-black mb-2' style={{fontSize:"18px",letterSpacing:"1px"}}>{product.desc}</p>
                    <img src={product.img} className='mb-3' alt="sorry" style={{height:"300px",width:"100%"}}/>
                    <div className='rating d-flex w-100 align-items-center justify-content-center mb-3'>
                        {Array(product.rating).fill().map((_,i)=>(<p key={i}><FontAwesomeIcon icon={faStar} className='text-warning'/></p>))} 
                    </div>
                    <h4 className='price mb-3'>Price : ${product.price}</h4>
                    <button onClick={addToBasket} className='text-black bg-warning py-1 px-2'>Add To Basket</button>
                </div>
            {/* </div> */}
       </div>
    </>
  )
}

export default Cart