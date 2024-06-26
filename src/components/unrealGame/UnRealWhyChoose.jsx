import React from "react";

const UnRealWhyChoose = () => {
  return (
    <section>
      <div className="container-fluid mobile_gamewhy_choose_main">
        <div className="auto-container mobile_gamewhy_choose">
          <div className="mobile_game_left">
            <h2>
              Why Choose <span style={{ color: "#BEAB59" }}>Raiden</span> For
            </h2>
            <h6>Unreal Development Services</h6>
          </div>
          <div className="mobile_game_right">
            <div className="mobail_game_card">
              <div style={{ background: "#BEAB59" }} className="left">
                <div className="icon_container">
                  <img
                    src="/assets/img/unreal-whychoose/expertise.svg"
                    alt=""
                  />
                </div>
              </div>
              <div className="right">
                <h6> Expertise</h6>
                <p>
                  Our team comprises seasoned professionals with a proven track
                  record of delivering exceptional Unreal Engine solutions.
                </p>
              </div>
            </div>
            <div className="mobail_game_card">
              <div style={{ background: "#BEAB59" }} className="left">
                <div className="icon_container">
                  <img
                    src="/assets/img/unreal-whychoose/innovation.svg"
                    alt=""
                  />
                </div>
              </div>
              <div className="right">
                <h6> Innovation</h6>
                <p>
                  We're at the forefront of innovation, constantly exploring new
                  techniques and technologies to push the boundaries of Unreal
                  Development.
                </p>
              </div>
            </div>


            <div className="mobail_game_card">
              <div style={{ background: "#BEAB59" }} className="left">
                <div className="icon_container">
                  <img
                    src="/assets/img/unreal-whychoose/quality assu.svg"
                    alt=""
                  />
                </div>
              </div>
              <div className="right">
                <h6>Quality Assurance</h6>
                <p>
                  Rigorous testing and quality assurance processes ensure that
                  our solutions are robust, reliable, and bug-free.
                </p>
              </div>
            </div>
            <div className="mobail_game_card">
              <div style={{ background: "#BEAB59" }} className="left">
                <div className="icon_container">
                  <img
                    src="/assets/img/unreal-whychoose/client satisfy.svg"
                    alt=""
                  />
                </div>
              </div>
              <div className="right">
                <h6>Client Satisfaction</h6>
                <p>
                  Our primary focus is client satisfaction. We strive to build
                  long-term partnerships based on trust, transparency, and
                  mutual success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UnRealWhyChoose;
