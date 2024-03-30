import React, { Fragment, Suspense, useEffect, useState } from 'react'
import HeaderTwo from '../components/HeaderTwo';
import FAQSectionOne from '../components/FAQSectionOne';
import ContactSection2 from '../components/ContactSection2';
import NewsSectionOne from '../components/NewsSectionOne';
import FooterSectionOne from '../components/FooterSectionOne';
import HelmetReact from '../elements/HelmetReact';
import Preloader from '../elements/Preloader';
import MetaverseHero from '../components/MetaverseDevolopment/MetaverseHero';
import MetaverseAbout from '../components/MetaverseDevolopment/MetaverseAbout';
import MetaverseCount from '../components/MetaverseDevolopment/MetaverseCount';

function NftDevlopment() {
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
                {/* metaverse-hero */}
                <MetaverseHero />
                {/* metaverse-about */}
                <MetaverseAbout />
                {/* metaverse-count */}
                <MetaverseCount />
                {/* faq */}
                <FAQSectionOne />
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

export default NftDevlopment