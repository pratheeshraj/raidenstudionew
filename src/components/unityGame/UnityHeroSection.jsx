import React from 'react'

const UnityHeroSection = () => {
  return (
    <section>
    <div
      className="container-fluid metaverseroyal_hero"
      style={{ backgroundImage: "none", backgroundColor: "#a2a89d" }}
    >
      <div className="auto-container metaverseroyal_hero_container">
        <div className="left" data-aos="fade-right" data-aos-delay="300">
          <h2>
            Elevate Your{" "}
            <span style={{ color: "#fdb441" }}>Gaming Experience</span> with{" "}
            <br /> <span style={{ color: "#fdb441" }}>Raiden</span>
          </h2>
          <p>
          Unlock the Power of Unity Development with Raiden. Transforming Ideas into Immersive Experiences.
          </p>
          <button
            className="default-btn"
            style={{ backgroundColor: "#fdb441" }}
          >
            Explore Now
          </button>
        </div>
        <div className="right" data-aos="fade-left" data-aos-delay="300">
          <img src="\assets\img\mobail-game-page\hero.png" alt="" />
        </div>
      </div>
    </div>
  </section>
  )
}

export default UnityHeroSection
