import React from "react";
import "./Product.css";

function Product({ id, title, image, price, rating }) {
  return (
    <div class="product_container">
      <div class="product_info">
        <p>{title}</p>
        <p class="product_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div class="product_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
        <img src={image} alt=""></img>
      </div>
      <button class="Button">Add to Cart</button>
    </div>
  );
}

export default Product;
