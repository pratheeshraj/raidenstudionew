import React from 'react'

function Casinofaq() {
    return (
        <section className="faq-section one" style={{ background: "#F8F9FA" }}>
            <div className="auto-container">
                <div className="row">
                    <div className="col-lg-6">
                        <div
                            className="section-title-shape-one left "
                            data-aos="fade-right"
                            data-aos-delay="300"
                        >
                            <h3 style={{ color: "57E400" }}>FAQ</h3>
                            <h2 style={{ color: "black" }}>
                                Answers At A<span className='theme-color' style={{ color: "#57E400" }}><br /> Glance</span>
                            </h2>
                            <p style={{ marginBottom: "10px", color: "black" }}>
                                Find quick solutions and insights to common queries and concerns about our casino with our comprehensive FAQ section.
                            </p>
                        </div>
                        <div
                            className="img-file "
                            data-aos="fade-right"
                            data-aos-delay="500"
                        >
                            <img
                                className="img-fluid"
                                src="\assets\img\virtualvegas\Group 37.jpg"
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div
                            className="faq-inner "
                            data-aos="fade-left"
                            data-aos-delay="300"
                            style={{ marginTop: "195px" }}
                        >
                            <div className="intro">
                                <h3 style={{ color: "black" }}>Common Question &amp; Answer</h3>
                            </div>
                            <div className="faq-list">
                                <div
                                    className="accordion accordion-flush"
                                    id="accordionFlushExample"
                                >
                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button
                                                className="accordion-button virtual-vegas"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#flush-collapseOne"
                                                aria-expanded="false"
                                                aria-controls="flush-collapseOne"
                                            >
                                                Can I customize the VirtualVegas platform with my own branding?
                                            </button>
                                        </h2>
                                        <div
                                            id="flush-collapseOne"
                                            className="accordion-collapse collapse show"
                                            data-bs-parent="#accordionFlushExample"
                                        >
                                            <div className="accordion-body">
                                                Yes, VirtualVegas offers extensive customization options, allowing you to brand the platform with your own logos, colors, and themes.                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button
                                                className="accordion-button collapsed virtual-vegas"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#flush-collapseTwo"
                                                aria-expanded="false"
                                                aria-controls="flush-collapseTwo"
                                            >
                                                Are the games on VirtualVegas fair?
                                            </button>
                                        </h2>
                                        <div
                                            id="flush-collapseTwo"
                                            className="accordion-collapse collapse"
                                            data-bs-parent="#accordionFlushExample"
                                        >
                                            <div className="accordion-body">
                                                Yes, all games on VirtualVegas are built with certified random number generators (RNGs) to ensure fair and unbiased outcomes.                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button
                                                className="accordion-button collapsed virtual-vegas"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#flush-collapseThree"
                                                aria-expanded="false"
                                                aria-controls="flush-collapseThree"
                                            >
                                                How secure are transactions on the VirtualVegas platform?
                                            </button>
                                        </h2>
                                        <div
                                            id="flush-collapseThree"
                                            className="accordion-collapse collapse"
                                            data-bs-parent="#accordionFlushExample"
                                        >
                                            <div className="accordion-body">
                                                VirtualVegas prioritizes security and employs the latest encryption technology, including blockchain, to ensure that all transactions are secure and transparent.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button
                                                className="accordion-button collapsed virtual-vegas"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#flush-collapseFive"
                                                aria-expanded="false"
                                                aria-controls="flush-collapseFive"
                                            >
                                                Are there any bonuses or promotions available on VirtualVegas?
                                            </button>
                                        </h2>
                                        <div
                                            id="flush-collapseFive"
                                            className="accordion-collapse collapse"
                                            data-bs-parent="#accordionFlushExample"
                                        >
                                            <div className="accordion-body">
                                                Yes, VirtualVegas offers a range of bonuses and promotions to reward players, including welcome bonuses for new players, reload bonuses, free spins, and loyalty rewards for our most dedicated patrons. Be sure to check our promotions page regularly for the latest offers!                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>)
}

export default Casinofaq