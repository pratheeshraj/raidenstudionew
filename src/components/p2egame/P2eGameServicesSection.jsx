import React from "react";

const P2eGameServicesSection = () => {
  return (
    <section>
      <div
        className="container-fulid key_features"
        style={{ backgroundColor: "#f8f9fa" }}
      >
        <h2 className="auto-container " style={{ color: "black" }}>
          Empowering <span style={{ color: "#F09C1F" }}>Play-to-Earn </span>{" "}
          Experiences
        </h2>
        <p style={{ color: "black", textAlign: "center" }}>
          we specialize in crafting virtual economies that empower players to
          earn rewards  while <br /> enjoying immersive gameplay experiences
        </p>
        <div className="auto-container row key_features_section_container">
          <div
            className="key_features_card"
            style={{
              backgroundColor: "white",
              boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
            }}
          >
            <img
              src="/assets/img/pe-empowering/storyboarding.svg"
              alt=""
            />
            <h6 style={{ color: "black" }}>Concept Design & Storyboarding</h6>
            <p style={{ color: "black" }}>
              From ideation to narrative creation, we breathe life into your
              game concept, ensuring it resonates with your target audience.
            </p>
          </div>
          <div
            className="key_features_card"
            style={{
              backgroundColor: "white",
              boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
            }}
          >
            <img
              src="/assets/img/pe-empowering/blockchain integration.svg"
              alt=""
            />
            <h6 style={{ color: "black" }}> Blockchain Integration</h6>
            <p style={{ color: "black" }}>
              Seamlessly integrate blockchain technology into your game to
              enable secure asset ownership and transparent in-game economies.
            </p>
          </div>{" "}
          <div
            className="key_features_card"
            style={{
              backgroundColor: "white",
              boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
            }}
          >
            <img
              src="/assets/img/pe-empowering/smartcontract.svg"
              alt=""
            />
            <h6 style={{ color: "black" }}>Smart Contract Development: </h6>
            <p style={{ color: "black" }}>
              Our experts develop custom smart contracts tailored to your game's
              mechanics, ensuring fairness and security for all players.
            </p>
          </div>{" "}
          <div
            className="key_features_card"
            style={{
              backgroundColor: "white",
              boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
            }}
          >
            <img
              src="/assets/img/pe-empowering/game dev.svg"
              alt=""
            />
            <h6 style={{ color: "black" }}>Game Development</h6>
            <p style={{ color: "black" }}>
              Leveraging the latest tools and technologies, we bring your game
              to life with stunning visuals, engaging gameplay, and scalable
              architecture.
            </p>
          </div>{" "}
          <div
            className="key_features_card"
            style={{
              backgroundColor: "white",
              boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
            }}
          >
            <img
              src="/assets/img/pe-empowering/monitization.svg"
              alt=""
            />
            <h6 style={{ color: "black" }}>Monetization Strategy</h6>
            <p style={{ color: "black" }}>
              Craft a comprehensive monetization strategy that balances player
              incentives with sustainable revenue streams, maximizing
              profitability without compromising player experience.
            </p>
          </div>{" "}
          <div
            className="key_features_card"
            style={{
              backgroundColor: "white",
              boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
            }}
          >
            <img
              src="/assets/img/pe-empowering/communit.svg"
              alt=""
            />
            <h6 style={{ color: "black" }}>
              {" "}
              Community Building and Marketing
            </h6>
            <p style={{ color: "black" }}>
              Foster a vibrant community around your game through strategic
              marketing initiatives, influencer partnerships, and community
              engagement campaigns.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default P2eGameServicesSection;
