import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function Header() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div class="header">
      <Link to="/">
        <img
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          class="header_logo"
          alt="amazon logo"
        ></img>
      </Link>

      <div class="header_search">
        <input type="text" class="header_searchInput" />
        <SearchIcon class="header_searchIcon" />
      </div>

      <div class="header_nav">
        {/* Header options here */}
        <Link to = './Login'>
          <div class="header_option">
            <span class="header_optionLineOne">Hello Guest</span>
            <span class="header_optionLineTwo">Sign In</span>
          </div>
        </Link>
        <div class="header_option">
          <span class="header_optionLineOne">Returns</span>
          <span class="header_optionLineTwo">& Orders</span>
        </div>

        <div class="header_option">
          <span class="header_optionLineOne">Your</span>
          <span class="header_optionLineTwo">Prime</span>
        </div>

        <Link to="/checkout">
          <div class="header_basketOption">
            <ShoppingBasketIcon />
            <span class="header_optionLineTwo header_basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
