import React from 'react'
import './Product.css'
import { useStateValue } from './Stateprovider'
function Product ({id,title,image,price,rating}) {
  
  const [{basket},dispatch ] = useStateValue();
  console.log('basket content',basket)
  const addToBasket =()=>{
    dispatch({
      type:'ADD_TO_BASKET',
      item:{
        id:id,
        price:price,
        title:title,
        image:image,
        rating:rating
      }
    })
  }
  
  return (
    <div className='product'>
      <div className='product__info'>
        <p>{title}</p>
        <p className='product__price'>
            <small>$</small>
            <strong>{price}</strong>
        </p>
        <div className='product__rating'>
            {
                Array(rating)
                .fill()
                .map((_)=> {
                    <p>*</p>
})
            }
        </div>
      </div>
      <img src={image} alt=''/>
      <button onClick={addToBasket}>Add to Button</button>
    </div>
  )
}

export default Product
