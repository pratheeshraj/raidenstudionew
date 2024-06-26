import React, { useState } from "react";


const ArTech = () => {
    const [frontend, setFrontend] = useState(true)
    const [backend, setBackend] = useState(false)
    const [mobile, setMobile] = useState(false)
    const [database, setDatabase] = useState(false)
    const [blockchain, setBlockchain] = useState(false)
    const [game, setGame] = useState(false)
    const handleFrontEnd = () => {
        setFrontend(true)
        setBackend(false)
        setMobile(false)
        setDatabase(false)
        setBlockchain(false)
        setGame(false)
    }
    const handleMobile = () => {
        setFrontend(false)
        setBackend(false)
        setMobile(true)
        setDatabase(false)
        setBlockchain(false)
        setGame(false)

    }
    const handleBlockchain = () => {
        setFrontend(false)
        setBackend(false)
        setMobile(false)
        setDatabase(false)
        setBlockchain(true)
        setGame(false)

    }
    const handleGame = () => {
        setFrontend(false)
        setBackend(false)
        setMobile(false)
        setDatabase(false)
        setBlockchain(false)
        setGame(true)

    }

    return (
        <>
            {/* FAQ Section three start */}
            <section className="faq-section three" style={{ background: "white" }}>
                <div className="auto-container">
                    <div className="row">
                        <h2 style={{ color: "black", textAlign: "center" }}>AR Technologies<span style={{ color: "#59C1FF" }}> We Use</span></h2>
                        <p style={{ color: "black", textAlign: "center" }}>Raiden uses cutting-edge technology and tools to revolutionize the field. We have added more well-known languages and frameworks to our technology stack to facilitate the development of AR apps. Our goal is to provide our clients with secure and scalable products.</p>
                        <div className="left_Language_div">
                            <div onClick={handleFrontEnd} style={{ color: frontend ? '#59C1FF' : 'black' }}>Frameworks</div>
                            <div onClick={handleMobile} style={{ color: mobile ? '#59C1FF' : 'black' }}>Platforms</div>
                            <div onClick={handleBlockchain} style={{ color: blockchain ? '#59C1FF' : 'black' }}>Glasses</div>
                        </div>
                        {
                            frontend ? <div className="right_Language_div">
                                <div className="Card_service">
                                    <img src="/assets/img/Language/UNITY.svg" alt="" />
                                    <div className="Card_name_sevice">Unity</div>
                                </div>
                                <div className="Card_service">
                                    <img src="/assets/img/Language/opengl.svg" alt="" />
                                    <div className="Card_name_sevice">OpenGL</div>
                                </div>
                                <div className="Card_service ">
                                    <img src="/assets/img/Language/artoolkit-1.svg" alt="" />
                                    <div className="Card_name_sevice">ARToolKit</div>
                                </div>
                                <div className="Card_service ">
                                    <img src="/assets/img/Language/arkit-removebg-preview 1.png" alt="" />
                                    <div className="Card_name_sevice">ARKit</div>
                                </div>
                                <div className="Card_service ">
                                    <img src="/assets/img/Language/google-arcore.svg" alt="" />
                                    <div className="Card_name_sevice">ARCore</div>
                                </div>
                                <div className="Card_service ">
                                    <img src="/assets/img/Language/ar-js-min.png" alt="" />
                                    <div className="Card_name_sevice">AR.js</div>
                                </div>
                            </div> : mobile ? <div className="right_Language_div">
                                <div className="Card3_service">
                                    <img src="/assets/img/Language/Android_robot.svg" alt="" />
                                    <div className="Card_name_sevice">Android</div>
                                </div>
                                <div className="Card3_service">
                                    <img src="/assets/img/Language/apple-ios.svg" alt="" />
                                    <div className="Card_name_sevice">iOS</div>
                                </div>
                                <div className="Card3_service">
                                    <img src="/assets/img/Language/Windows_logo_-_2012_derivative.svg" alt="" />
                                    <div className="Card_name_sevice">Windows</div>
                                </div>
                                <div className="Card3_service">
                                    <img src="/assets/img/Language/20221028124048!MacOS_logo.svg" alt="" />
                                    <div className="Card_name_sevice">macOS</div>
                                </div>
                            </div> : blockchain ? <div className="right_Language_div">
                                <div className="Card5_service">
                                    <img src="/assets/img/Language/kisspng-virtual-reality-headset-microsoft-hololens-samsung-5ae825690637d1.0972398215251633690255-removebg-preview.png" alt="" />
                                    <div className="Card_name_sevice">HoloLens</div>
                                </div>
                                <div className="Card5_service">
                                    <img src="/assets/img/Language/oculus-logo.svg" alt="" />
                                    <div className="Card_name_sevice">Oculus Quest</div>
                                </div>
                                <div className="Card5_service">
                                    <img style={{ scale: "1.5" }} src="/assets/img/Language/Apple_Vision_Pro.svg" alt="" />
                                    <div className="Card_name_sevice">Vision Pro</div>
                                </div>
                            </div> : ""
                        }
                    </div>
                </div>
                <div className="shape-image">
                    <div className="shape-img-1 poa">
                        <img src="/assets/img/Language/apple-vision-pro-labs-256x256_2x.png" alt="" />
                    </div>
                    <div className="shape-img-2 poa">
                        <img src="/assets/img/shape/01_shape.svg" alt="" />
                    </div>
                    <div className="shape-img-5 poa">
                        <img src="/assets/img/icon/26_icon.png" alt="" />
                    </div>
                    <div className="shape-img-6 poa">
                        <img src="/assets/img/Language/react-2.svg" alt="" />
                    </div>
                    <div className="shape-img-7 poa">
                        <img src="/assets/img/Language/nodejs-icon.svg" alt="" />
                    </div>

                </div>
            </section>
            {/* FAQ Section three end */}
        </>
    );
};

export default ArTech;

