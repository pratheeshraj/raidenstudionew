import React, { useEffect, useRef } from 'react'
import VanillaTilt from "vanilla-tilt";
import icon1 from "../images/gameproduct-detailimg/icon1.png";
const TiltCard = () => {
    const tiltRef = useRef(null); // Create a ref for the element

    useEffect(() => {
      // Initialize vanilla-tilt on the element with the ref
      VanillaTilt.init(tiltRef.current, {
        max: 10, // Maximum tilt rotation (degrees)
        speed: 100, // Speed of the tilt effect // Enables glare effect
        "max-glare": 0.5, // Maximum glare opacity
      });
  
      // Cleanup on component unmount
      return () => tiltRef.current && tiltRef.current.vanillaTilt.destroy();
    }, []);
  return (
    <div className="animation_card" ref={tiltRef}>
    <img src={icon1} alt="icon" />
    <h6>NFT RPG Game Development</h6>
    <p>
      We make role-playing games [RPG] with an immersive game
      world, engaging narratives, and a great progression system
      using various in-game items like NFTs.
    </p>
  </div>
  )
}

export default TiltCard