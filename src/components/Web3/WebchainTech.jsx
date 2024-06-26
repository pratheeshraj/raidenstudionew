import React, { useState } from "react";

const WebchainTech = () => {
    const [frontend, setFrontend] = useState(true)
    const [backend, setBackend] = useState(false)
    const [mobile, setMobile] = useState(false)
    const [database, setDatabase] = useState(false)
    const [blockchain, setBlockchain] = useState(false)
    const [game, setGame] = useState(false)
    const [cloud, setCloud] = useState(false)

    const handleFrontEnd = () => {
        setFrontend(true)
        setBackend(false)
        setMobile(false)
        setDatabase(false)
        setBlockchain(false)
        setGame(false)
        setCloud(false)
    }

    const handleMobile = () => {
        setFrontend(false)
        setBackend(false)
        setMobile(true)
        setDatabase(false)
        setBlockchain(false)
        setGame(false)
        setCloud(false)

    }

    const handleBlockchain = () => {
        setFrontend(false)
        setBackend(false)
        setMobile(false)
        setDatabase(false)
        setBlockchain(true)
        setGame(false)
        setCloud(false)

    }
    const handleGame = () => {
        setFrontend(false)
        setBackend(false)
        setMobile(false)
        setDatabase(false)
        setBlockchain(false)
        setGame(true)
        setCloud(false)

    }

    const handleDatabase = () => {
        setFrontend(false)
        setBackend(false)
        setMobile(false)
        setDatabase(true)
        setBlockchain(false)
        setGame(false)
        setCloud(false)

    }

    const handleCloud = () => {
        setFrontend(false)
        setBackend(false)
        setMobile(false)
        setDatabase(false)
        setBlockchain(false)
        setGame(false)
        setCloud(true)
    }

    return (
        <>
            {/* FAQ Section three start */}
            <section className="faq-section three" style={{ background: "white" }}>
                <div className="auto-container">
                    <div className="row">
                        <h2 style={{ color: "black", textAlign: "center" }}>The Technology Stack<span style={{ color: "#E052D1" }}> We Use</span></h2>
                        <p style={{ color: "black", textAlign: "center" }}>Our proficiency extends across a diverse range of technologies and frameworks, including but not limited to </p>
                        <div className="left_Language_div">
                            <div onClick={handleFrontEnd} style={{ color: frontend ? '#E052D1' : 'black' }}>Web</div>
                            <div onClick={handleMobile} style={{ color: mobile ? '#E052D1' : 'black' }}>Smart Contract</div>
                            <div onClick={handleBlockchain} style={{ color: blockchain ? '#E052D1' : 'black' }}>Blockchain</div>
                            <div onClick={handleGame} style={{ color: game ? '#E052D1' : 'black' }}>Backend</div>
                            <div onClick={handleDatabase} style={{ color: database ? '#E052D1' : 'black' }}>Database</div>
                            <div onClick={handleCloud} style={{ color: cloud ? '#E052D1' : 'black' }}>Cloud</div>


                        </div>
                        {
                            frontend ? <div className="right_Language_div">
                                <div className="Card_service">
                                    <img src="/assets/img/Language/REACT NATIVE.svg" alt="" />
                                    <div className="Card_name_sevice">React js</div>
                                </div>
                                <div className="Card_service">
                                    <img src="/assets/img/Language/ANGULAR.svg" alt="" />
                                    <div className="Card_name_sevice">Angular</div>
                                </div>
                                <div className="Card_service ">
                                    <img src="/assets/img/Language/Vue.js_Logo_2.svg" alt="" />
                                    <div className="Card_name_sevice">Vue js</div>
                                </div>
                            </div> : mobile ? <div className="right_Language_div">
                                <div className="Card3_service">
                                    <img src="/assets/img/Language/solidity.svg" alt="" />
                                    <div className="Card_name_sevice">Solidity</div>
                                </div>
                                <div className="Card3_service">
                                    <img src="/assets/img/Language/Vyper.svg" alt="" />
                                    <div className="Card_name_sevice">Vyper</div>
                                </div>
                            </div> : blockchain ? <div className="right_Language_div">
                                <div className="Card5_service">
                                    <img src="/assets/img/Language/ethereum-eth-logo.svg" alt="" />
                                    <div className="Card_name_sevice">Ethereum</div>
                                </div>
                                <div className="Card5_service">
                                    <img src="/assets/img/Language/hyperledger-icon.svg" alt="" />
                                    <div className="Card_name_sevice">Hyperledger</div>
                                </div>
                                <div className="Card5_service">
                                    <img src="/assets/img/Language/eos-eos-logo.svg" alt="" />
                                    <div className="Card_name_sevice">EOS</div>
                                </div>
                            </div> : game ? <div className="right_Language_div">
                                <div className="Card6_service">
                                    <img src="/assets/img/Language/nodejs-icon.svg" alt="" />
                                    <div className="Card_name_sevice">Node js</div>
                                </div>
                                <div className="Card6_service">
                                    <img style={{ fill: "red" }} src="/assets/img/Language/PYTHON.svg" alt="" />
                                    <div className="Card_name_sevice">Python</div>
                                </div>
                                <div className="Card6_service">
                                    <img src="/assets/img/Language/web3-backend-go.svg" alt="" />
                                    <div className="Card_name_sevice">Go</div>
                                </div>

                            </div> : database ? <div className="right_Language_div">
                                <div className="Card6_service">
                                    <img src="/assets/img/Language/mongo.svg" alt="" />
                                    <div className="Card_name_sevice">MongoDB</div>
                                </div>
                                <div className="Card6_service">
                                    <img src="/assets/img/Language/postgresq.svg" alt="" />
                                    <div className="Card_name_sevice">PostgreSQL</div>
                                </div>
                                <div className="Card6_service">
                                    <img src="/assets/img/Language/mysql-icon.svg" alt="" />
                                    <div className="Card_name_sevice">MySQL</div>
                                </div>
                            </div> : cloud ? <div className="right_Language_div">
                                <div className="Card6_service">
                                    <img src="/assets/img/Language/amazon-web-services-2.svg" alt="" />
                                    <div className="Card_name_sevice">Amazon Web Services</div>
                                </div>
                                <div className="Card6_service">
                                    <img src="/assets/img/Language/google-cloud-1.svg" alt="" />
                                    <div className="Card_name_sevice">Microsoft Azure</div>
                                </div>
                                <div className="Card6_service">
                                    <img src="/assets/img/Language/microsoft-azure-3.svg" alt="" />
                                    <div className="Card_name_sevice">Google Cloud Platform</div>
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

export default WebchainTech;
