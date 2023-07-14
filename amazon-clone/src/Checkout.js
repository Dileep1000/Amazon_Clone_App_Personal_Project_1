import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal.js";

function Checkout() {
  return (
    <div class="checkout">
      <div class="checkout_left">
        <img
          class="checkout_ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        ></img>
        <div>
          <h2 class="checkout_title">Your Shopping Cart</h2>
        </div>
      </div>
      <div class="checkout_right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
