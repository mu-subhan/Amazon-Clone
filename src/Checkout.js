import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'
import { useStateValue } from './Stateprovider';
import ProductCart from './ProductCart'

function Checkout() {
  const [{basket}]=useStateValue();
  return (
    <div className='checkout'>
        <div className='checkout__left'>
             {
              basket.length ===0 ?(
            <div>
                <h2 className='checkout__title'>Your shooping basket is empty.</h2>
                <p>You have no item in your basket.Buy now</p>
            </div>
                
              ):(
  
<div>
  <h2 className="shoopingBasktetTitle">
    Items in the Shopping Basket
  </h2>


{basket.map((item) =>(
                <ProductCart
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
                />
              ))}
             </div>
           
  )}         
 </div>
 {basket.length > 0 && (
<div className='checkout__right'>
    <Subtotal/>
     </div>      
)}
    </div>
 );
 }

export default Checkout




