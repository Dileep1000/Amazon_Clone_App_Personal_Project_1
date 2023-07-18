import React from "react";
import "./CheckoutProduct.css";

function checkoutProduct({ id, image, title, price, rating }) {
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
              <p>⭐</p>
            ))}
        </div>
        <button>Remove from Cart</button>
      </div>
    </div>
  );
}

export default checkoutProduct;
