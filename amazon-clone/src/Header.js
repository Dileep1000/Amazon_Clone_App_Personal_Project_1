import React from "react";
import "./Header.css";

function Header() {
  return (
    <div class="header">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcJbAuFNp8xoawKH1kNsNG5-F6ES6TU5HynQ&usqp=CAU"
        class="header_logo"
        alt="amazon logo"
      ></img>

      <div class="header_search">
        <input type="text" class="header_searchInput" />
        {/* Search bar logo here */}
      </div>

      <div class="header_nav">
        {/* Header options here */}
        <div class="header_option">
          <span class="header_optionLineOne">Hello Guest</span>
          <span class="header_optionLineTwo">Sign In</span>
        </div>

        <div class="header_option">
          <span class="header_optionLineOne">Returns</span>
          <span class="header_optionLineTwo">&Orders</span>
        </div>

        <div class="header_option">
          <span class="header_optionLineOne">Your</span>
          <span class="header_optionLineTwo">Prime</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
