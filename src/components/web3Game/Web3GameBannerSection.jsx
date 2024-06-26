import React from "react";
import { Link } from "react-router-dom";

const Web3GameBannerSection = () => {
  return (
    <section
      className="counter-section one  web3game_banner"
      style={{
        backgroundSize: "cover",
        background: 'url("/assets/img/web3game-img/banner.jpg")',
      }}
    >
      <div className="auto-container">
        <div
          className="award-part "
          data-aos="fade-up"
          data-aos-delay="300"
          style={{ paddingTop: "0", paddingBottom: "0" }}
        >
          <div
            className="row"
            style={{ display: "flex", alignItems: "center" }}
          >
            <div className="col-lg-6">
              <div className="title">
                <h2>
                  Ready to Revolutionize{" "}
                  <span className="theme-color" style={{ color: "#38FFFF" }}>
                    Learning and Drive Success
                  </span>{" "}
                  in Your Industry?
                </h2>
                <p>
                  Explore the limitless potential of Web3 Game Development with
                  Raiden. Contact us today to embark on a journey of innovation,
                  collaboration, and success.
                </p>
                <div className="inner-btn d-adjust">
                  <div>
                    <Link
                      className="default-btn"
                      to="/contact-us"
                      style={{ backgroundColor: "#38FFFF" }}
                    >
                      Let’s Work To Do{" "}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="overlay-text">
      <h1>AI</h1>
    </div> */}
          {/* <div className="shape-img">
                    <img
                        className="shape-1 poa"
                        src="./assets/img/icon/50_icon.png"
                        alt=""
                    />
                    <img
                        className="shape-2 poa"
                        src="./assets/img/icon/51_icon.png"
                        alt=""
                    />
                </div> */}
        </div>
      </div>
    </section>
  );
};

export default Web3GameBannerSection;
