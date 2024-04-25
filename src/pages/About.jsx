import React, { Fragment, Suspense, useEffect, useState } from "react";
import Preloader from "../elements/Preloader";
import HeaderOne from "../components/HeaderOne";
import FooterSectionOne from "../components/FooterSectionOne";
import Breadcrumb from "../components/Breadcrumb";
import AboutSectionOne from "../components/AboutSectionOne";
import CounterSectionOne from "../components/CounterSectionOne";
import TestimonialSectionOne from "../components/TestimonialSectionOne";
import NewsSectionOne from "../components/NewsSectionOne";
import HelmetReact from "../elements/HelmetReact";
import HeaderTwo from "../components/HeaderTwo";
import AboutPara from "../components/AboutPara";
import TestimonialSectionThree from './../components/TestimonialSectionThree';
import Aboutbanner from './../components/Aboutbanner';

const About = () => {
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
        <HelmetReact title={"About"} />
        {/* Header one */}
        <HeaderTwo />
        {/* Breadcrumb */}
        <Breadcrumb data={"About us"} img={"url('/assets/img/bg-image/Frame 71.jpg')"} />
        {/* About Section One */}
        <AboutPara />
        {/* Testimonial Section One */}
        <TestimonialSectionThree />
        {/* Counter Section One */}
        <Aboutbanner />
        {/* News Section One */}
        <NewsSectionOne />
        {/* Footer Section */}
        <FooterSectionOne />
      </Suspense>
    </Fragment>
  );
};

export default About;
