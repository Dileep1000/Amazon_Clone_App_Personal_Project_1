import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, image, title, price, rating }) {
  
  const [{ basket }, dispatch] = useStateValue();
  const removeFromBasket = () =>{
    //Removing the item from the cart 
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id
    })
  }

  return (
    <div class="checkoutProd">
      <img class="checkoutProduct_img" src={image} />

      <div class="checkoutProduct_info">
        <p class="checkoutProduct_title">{title}</p>
        <p class="checkoutProduct_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div class="checkoutProduct_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
        <button onClick={removeFromBasket}>Remove from Cart</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
