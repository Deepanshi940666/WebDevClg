import React from "react";
import "./About.css";
// import foodImg from "../assets/story-food.jpg";

const About = () => {
  return (
    <section className="about-section">

      <div className="about-container">

        <div className="about-image">
          <img src="https://i.pinimg.com/1200x/3c/49/44/3c494462afd9749c60b1cb29e3aaf5b4.jpg" alt="Our Story" />
        </div>

        <div className="about-content">

          <span className="subtitle">Discover</span>

          <h1>Our Story</h1>

          <p>
            At Savora, we believe every meal tells a story.
            Our passion is bringing together delicious food,
            unforgettable flavors, and a warm dining experience.
          </p>

          <p>
            Whether you're joining us for a family dinner,
            a celebration, or simply satisfying a craving,
            we strive to make every bite memorable.
          </p>

          <button>More About Us →</button>

        </div>

      </div>

    </section>
  );
};

export default About;