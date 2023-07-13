import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div class="Home">
      <div class="Home_Container">
        <img
          class="home_Image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="Home_Image"
        ></img>
      </div>

      {/*Home row 1 products*/}
      <div class="Home_row">
        <Product
          id="12321341"
          title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses, by Eric Ries Paperback"
          price={29.99}
          image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
          rating={5}
        />
        <Product
          id="49538094"
          title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with 
                  K-beater, Dough Hook and Whisk, 5 Liter Glass Bowl"
          price={239.0}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
        />
      </div>

      {/*Home row 2 products*/}
      <div class="Home_row">
        <Product
          id="4903850"
          title="SAMSUNG 32 Odyssey Neo G8 4K UHD 240Hz 1ms G-Sync 1000R Curved Gaming Monitor, 1920x1080"
          price={999.99}
          rating={4}
          image="https://m.media-amazon.com/images/I/81dDR+bGO3L._AC_UY218_.jpg"
        />
        <Product
          id="23445930"
          title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
          price={98.99}
          rating={5}
          image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
        />
        <Product
          id="3254354345"
          title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
          price={598.99}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
        />
      </div>

      {/*Home row 3 products*/}
      <div class="Home_row">
        <Product
          id="90829332"
          title="SAMSUNG Odyssey CRG Series 49-Inch Dual QHD (5120x1440) Gaming Monitor, 120Hz, Curved, QLED, HDR, Height Adjustable Stand, Radeon FreeSync (LC49RG90SSNXZA)"
          price={1094.98}
          rating={3}
          image="https://m.media-amazon.com/images/I/81QEJYyspjL._AC_UY218_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
