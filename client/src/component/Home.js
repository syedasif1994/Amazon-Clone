import React from 'react'
import "./home.css"
import Banner from "../assests/image/banner.jpg"
import Product from './Product'

function Home() {

  return (
    <div className='home'>
      <div className="home_container">
        <img className="home_banner" src={Banner} alt="Amazon Prime" />

        <div className="home_row">
          <Product
            id="01"
            product_name="Lenovo IdeaPad Slim 3"
            product_price={86500}
            imagepic="https://m.media-amazon.com/images/I/71iI2wTW56L._SL1500_.jpg"
            product_rating={4}
          />

          <Product
            id="02"
            product_name="HP Pavilion 14 12th Gen"
            product_price={65000}
            imagepic="https://m.media-amazon.com/images/I/81h346HzqML._SL1500_.jpg"
            product_rating={4}
          />
        </div>


        <div className="home_row">
          <Product
            id="03"
            product_name="Apple iPhone 13"
            product_price={126500}
            imagepic="https://m.media-amazon.com/images/I/61i8Vjb17SL._SL1500_.jpg"
            product_rating={5}
          />

          <Product
            id="04"
            product_name="Samsung Galaxy S22"
            product_price={28200}
            imagepic="https://m.media-amazon.com/images/I/71PvHfU+pwL._SL1500_.jpg"
            product_rating={5}
          />

          <Product
            id="05"
            product_name="Redmi Note 11"
            product_price={19800}
            imagepic="https://m.media-amazon.com/images/I/71Iq9ug6OvL._SL1500_.jpg"
            product_rating={4}
          />

          <Product
            id="06"
            product_name="Oppo A54"
            product_price={15200}
            imagepic="https://m.media-amazon.com/images/I/618hM-rT4aS._SL1500_.jpg"
            product_rating={3}
          />
        </div>

        <div className="home_row">
          <Product
            id="07"
            product_name="Fire-Boltt Visionary"
            product_price={4200}
            imagepic="https://m.media-amazon.com/images/I/61n1X3niLuL._SL1500_.jpg"
            product_rating={5}
          />
          <Product
            id="08"
            product_name="Noise ColorFit Pulse"
            product_price={3500}
            imagepic="https://m.media-amazon.com/images/I/61L7mz0jjeL._SL1500_.jpg"
            product_rating={4}
          />
          <Product
            id="09"
            product_name="boAt Xtend Smartwatch"
            product_price={2600}
            imagepic="https://m.media-amazon.com/images/I/61IMRs+o0iL._SL1500_.jpg"
            product_rating={3}
          />
        </div>

        <div className="home_row">
          <Product
            id="10"
            product_name="Vu 190 cm (75 inches)"
            product_price={121500}
            imagepic="https://m.media-amazon.com/images/I/71hRCyKB-OL._SL1500_.jpg"
            product_rating={5}
          />
        </div>

      </div>
    </div>
  )
}

export default Home