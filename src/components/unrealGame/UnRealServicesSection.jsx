import React from "react";

const UnRealServicesSection = () => {
  return (
    <section>
      <div
        className="container-fulid key_features"
        style={{ backgroundColor: "#f8f9fa" }}
      >
        <h2 className="auto-container " style={{ color: "black" }}>
          Our <span style={{ color: "#BEAB59" }}>Unreal Development </span>{" "}
          Offerings
        </h2>
        <p style={{ textAlign: "center", marginBottom: "40px", color: "black" }}>
          Step into a world where the impossible becomes possible. Explore our
          range of Unreal Engine services <br /> tailored to meet your every need.
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
              src="/assets/img/unreal-our-unreal/game dev.svg"
              alt=""
            />
            <h6 style={{ color: "black" }}>Game Development</h6>
            <p style={{ color: "black" }}>
              From concept to launch, we specialize in crafting captivating and
              immersive gaming experiences using Unreal Engine.
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
              src="/assets/img/unreal-our-unreal/vr ar.svg"
              alt=""
            />
            <h6 style={{ color: "black" }}>
              {" "}
              (VR) and (AR)
            </h6>
            <p style={{ color: "black" }}>
              Step into the future with our VR and AR solutions that blend
              reality with imagination, powered by Unreal Engine's cutting-edge
              technology.
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
              src="/assets/img/unreal-our-unreal/maintenance.svg"
              alt=""
            />
            <h6 style={{ color: "black" }}>Architectural Visualization</h6>
            <p style={{ color: "black" }}>
              Visualize your architectural designs with stunning realism and
              interactivity, thanks to our expertise in Unreal Engine's
              architectural visualization capabilities.
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
              src="/assets/img/unreal-our-unreal/simulation.svg"
              alt=""
            />
            <h6 style={{ color: "black" }}>Simulation and Training</h6>
            <p style={{ color: "black" }}>
              Enhance learning outcomes and improve training effectiveness with
              our simulation solutions built on Unreal Engine's robust
              framework.
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
              src="/assets/img/unreal-our-unreal/visualeffect.svg"
              alt=""
            />
            <h6 style={{ color: "black" }}>Cinematics and Visual Effects</h6>
            <p style={{ color: "black" }}>
              Bring stories to life and captivate audiences with breathtaking
              cinematics and visual effects rendered using Unreal Engine's
              unparalleled capabilities.
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
              src="/assets/img/unreal-our-unreal/custom unreal.svg"
              alt=""
            />
            <h6 style={{ color: "black" }}>
              {" "}
              Custom Unreal Engine
            </h6>
            <p style={{ color: "black" }}>
              Tailored solutions for unique needs. We specialize in developing
              custom applications and tools using Unreal Engine's flexible and
              powerful features.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UnRealServicesSection;
