// import React from 'react'
// import './ProductCart.css'
// import { useStateValue } from './Stateprovider'

// function ProductCart ({ id,title,image,price,rating}){

// const [{basket,dispatch}] = useStateValue();
// const removeItem =()=>{
//     dispatch({
//         type:'REMOVE_FROM_CART',
//         id:id
//     })
// }



//   return (
//     <div className='productcart'>
//       <img className='productcart__image' src={image} alt=''/>
//       <div className='productcart__info'>
//         <p className='productcart__title'>{title}</p>
//         <p className='productcart__price'>${price}</p>
//       </div>
//       <div className='product__rating'>
//         {
//             Array(rating)
//             .fill()
//             .map((_)=>{
//                 <span>*</span>
//             })
//         }
//       </div>
//       <button onClick={removeItem}>Remove from the Cart</button>
//     </div>
//   )
// }

// export default ProductCart 

import React from "react";
import "./ProductCart.css";
import { useStateValue } from "./Stateprovider";

function ProductCart({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeItem = () => {
    dispatch({
      type: "REMOVE_FROM_CART",
      id: id,
    });
  };
  return (
    <div className="productCart">
      <img className="productCart__image" src={image} alt="" />
      <div className="productCart__info">
        <p className="productCart__title">{title}</p>
        <p className="productCart__price">${price}</p>

        <div className="productCart__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <span>*</span>
            ))}
        </div>
        <button onClick={removeItem}>Remove from the Cart</button>
      </div>
    </div>
  );
}

export default ProductCart;
