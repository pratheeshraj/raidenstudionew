import React from 'react'

function WebWhychoose() {

    return (
        <>
            <section className="faq-section three whychoose_fulldiv">
                <div className="auto-container">
                    <div className="row wwhychoose_maindiv">
                        <div className="whychoose_left_div">
                            <h2 style={{ marginBottom: "25px", color: "black", textAlign: "center" }}>Why Choose<span style={{ color: "#E052D1" }}> Raiden ?</span></h2>
                            {/* <p style={{ color: "black", textAlign: "center", marginBottom: "50px" }}>As one of the dedicated AI service providers, we use our significant domain expertise to continually expand the boundaries of what is achievable for your business. We have a fantastic group of AI specialists who thrive on challenges and are always looking for new AI possibilities to help our clients meet their goals. As the best artificial intelligence development company, we define ourselves by:</p> */}
                        </div>
                        <div className="whychoose_right_div">
                            <div className='ai_whychoose_card_div'>
                                <div style={{ background: "linear-gradient(136.76deg, #F40076 0%, #DF98FA 100%)" }} className='whychoose_ai_box'>
                                    <img src='/assets/img/web3-why/expertise.svg' />
                                </div>
                                <div className='whychoose_ai_content'>Expertise</div>
                            </div>
                            <div className='ai_whychoose_card_div'>
                                <div style={{ background: "linear-gradient(136.76deg, #FCCF31 0%, #F55555 100%)" }} className='whychoose_ai_box'>
                                    <img src='/assets/img/web3-why/innovation.svg' />
                                </div>
                                <div className='whychoose_ai_content'>Innovation</div>
                            </div>
                            <div className='ai_whychoose_card_div'>
                                <div style={{ background: "linear-gradient(136.76deg, #ABDCFF 0%, #0396FF 100%)" }} className='whychoose_ai_box'>
                                    <img src='/assets/img/web3-why/collabration.svg' />
                                </div>
                                <div className='whychoose_ai_content'>Collaborative Approach</div>
                            </div>
                            <div className='ai_whychoose_card_div'>
                                <div style={{ background: "linear-gradient(136.76deg, #90F7EC 0%, #32CCBC 100%)" }} className='whychoose_ai_box'>
                                    <img src='/assets/img/web3-why/qualityassu.svg' />
                                </div>
                                <div className='whychoose_ai_content'>Quality Assurance</div>
                            </div>
                            <div className='ai_whychoose_card_div'>
                                <div style={{ background: "linear-gradient(136.76deg, #F889D5 0%, #5650DE 100%)" }} className='whychoose_ai_box'>
                                    <img src='/assets/img/web3-why/customersatis.svg' />
                                </div>
                                <div className='whychoose_ai_content'>Customer Satisfaction</div>
                            </div>
                            <div className='ai_whychoose_card_div'>
                                <div style={{ background: "linear-gradient(136.76deg, #FF9897 0%, #F650A0 100%)" }} className='whychoose_ai_box'>
                                    <img src='/assets/img/web3-why/proven.svg' />
                                </div>
                                <div className='whychoose_ai_content'>Proven Track Record</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="shape-image">
                    <div className="shape-img-2 poa">
                        <img src="/assets/img/shape/01_shape.svg" alt="" />
                    </div>
                    <div className="shape-img-5 poa">
                        <img src="/assets/img/icon/26_icon.png" alt="" />
                    </div>
                </div>
            </section>
        </>
    );
};


export default WebWhychoose