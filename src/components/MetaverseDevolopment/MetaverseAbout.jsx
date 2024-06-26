import React from "react";

const MetaverseAbout = () => {
    return (
        <>
            {/* Service Details Section Start */}
            <section
                style={{ background: "white" }}
                className="service-details-section"
                data-aos="fade-up"
                data-aos-delay="300"
            >
                <div className="auto-container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="left-wrapper ">
                                <div className="img-file">
                                    <img
                                        className="img-fluid"
                                        src="/assets/img/metaverse-block/about.jpg"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="right-wrapper ps-2">
                                <h2 style={{ color: "black" }} className="title">Engaging 3D Spaces That Dramatically Increase Customer Engagement
                                </h2>
                                <p style={{ color: "black" }}>
                                    Make potential customers stay with your Metaverse project by using services from the top Metaverse app development company Raiden, which guarantees immersive and engaging experiences for your users. Leverage the power of the most realistic metaverse development company to provide unforgettable virtual experiences to your users.                                </p>
                                <p style={{ color: "black" }}>
                                    Raiden creates and develops metaverse components like 3D virtual spaces, metaverse NFT marketplaces, metaverse applications, and decentralized platforms that are tailored to your specific virtual environment. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Service Details Section End */}
        </>
    );
};

export default MetaverseAbout;
