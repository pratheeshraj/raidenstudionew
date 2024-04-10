import React, { Fragment, Suspense, useEffect, useState } from 'react'
import HeaderTwo from '../components/HeaderTwo';
import ContactSection2 from '../components/ContactSection2';
import NewsSectionOne from '../components/NewsSectionOne';
import FooterSectionOne from '../components/FooterSectionOne';
import HelmetReact from '../elements/HelmetReact';
import Preloader from '../elements/Preloader';
import MetaverseBanner from '../components/MetaverseDevolopment/MetaverseBanner';
import VrHero from '../components/Vrdevelopment/VrHero';
import VrAbout from '../components/Vrdevelopment/VrAbout';
import VrCount from '../components/Vrdevelopment/VrCount';
import Vrsevice from '../components/Vrdevelopment/Vrsevice';
import Vrfeatures from '../components/Vrdevelopment/Vrfeatures';
import VrIndustries from '../components/Vrdevelopment/VrIndustries';
import VrTech from '../components/Vrdevelopment/VrTech';
import VrWhyChoose from '../components/Vrdevelopment/VrWhyChoose';
import VrFaq from '../components/Vrdevelopment/VrFaq';

function VRdevelopment() {
    let [active, setActive] = useState(true);
    useEffect(() => {
        setTimeout(function () {
            setActive(false);
        }, 2000);
    }, []);

    return (
        <Fragment>
            <Suspense>
                {active === true && <Preloader />}
                {/* Helmet */}
                <HelmetReact title={"Services Details"} />
                {/* Header two */}
                <HeaderTwo />
                {/* vr-hero */}
                <VrHero />
                {/* vr-about */}
                <VrAbout />
                {/* vr-count */}
                <VrCount />
                {/* vr-service */}
                <Vrsevice />
                {/* metaverse-banner */}
                <MetaverseBanner />
                {/* metaverse-features */}
                <Vrfeatures />
                {/* metaverse-industries */}
                <VrIndustries />
                {/* metaverse-tech */}
                <VrTech />
                {/* metaverse-process */}
                {/* <MetaverseProcess /> */}
                {/* metaverse-whychoose */}
                <VrWhyChoose />
                {/* faq */}
                <VrFaq />
                {/* contact */}
                <ContactSection2 />
                {/* Footer Section */}
                {/* News Section Two */}
                <NewsSectionOne />
                <FooterSectionOne />
            </Suspense>
        </Fragment>
    );
};

export default VRdevelopment