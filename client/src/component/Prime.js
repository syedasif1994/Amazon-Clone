import React from 'react'
import "./prime.css"
import Banner from "../assests/image/prime.jpg"
import BannerBelow from "../assests/image/prime1.jpg"

function Prime() {
  return (
    <div className='prime'>
      <div className="prime_container">



        <div className="prime_welcome">
          <img src={Banner} alt=" " />
          <div className="prime_infoFree">
            <h1>Welcome to Prime Video</h1>
            <h3>Join Prime to watch the latest movies, TV shows and award-winning Amazon Originals</h3>
            <button className="prime_btn" type="submit">Start your 30-Day free Trial</button>
            <p>With select credit, debit card, or UPI ID</p>
          </div>
        </div>

        <div className="prime_welcomeBelow">
          <img src={BannerBelow} alt=" " />

          <div className="prime_infoRent">
            <h2>Movie rentals on Prime Video</h2>
            <h4>Early Access to new movies, before digital subscription</h4>
            <button className="prime_btn" type="submit">Rent Now</button>
          </div>
        </div>

        <div className="prime_fav">
          <div className="Content">

            <div className="favLeft">
              <h2> Your favorite channels all in one place</h2>
              <p> With Prime Video Channels, find shows and movies from your favorite channels all in one place. Enjoy with an add-on subscription to Channels of your choice </p>
            </div>
            <div className="favRight">

              <div className="prime_Box">
                <div className='prime_boxBody'> LIONSGATE <span> PLAY</span> </div>
                <div className='prime_boxBody'> Aaj <span>Tak</span> </div>
                <div className='prime_boxBody'> Eros<span>now</span> </div>
              </div>

              <div className="prime_Box">
                <div className='prime_boxBody'> Sony<span>Tv</span></div>
                <div className='prime_boxBody'>Zee<span>News</span></div>
                <div className='prime_boxBody'>History<span>TV</span></div>
              </div>

              <div className="prime_Box">
                <div className='prime_boxBody'>UTV</div>
                <div className='prime_boxBody'> Hungama</div>
                <div className='prime_boxBody'>Discovery+</div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Prime