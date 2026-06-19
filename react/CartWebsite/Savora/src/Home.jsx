import React from 'react'
import "./Home.css";
import foodImg from "./assets/HomeRotator.png";
const Home = () => {
  return (
         <section className="hero">

      <div className="hero-content">
        <h1>
          Discover <br />
          Delicious Food <br />
          Near You
        </h1>

        <p>
          Explore top restaurants, discover amazing cuisines,
          and enjoy your favorite meals from the comfort of your home.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn">
            Explore Menu
          </button>

          <button className="secondary-btn">
            View Restaurants
          </button>
        </div>
      </div>

      <div className="hero-image">
        <img src={foodImg} alt="Delicious Food" />
      </div>

    </section>

  )
}

export default Home