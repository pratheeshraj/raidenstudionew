import React from "react";
import { Helmet } from "react-helmet";
const HelmetReact = ({ title, description, keywords, ogimage }) => {
  return (
    <Helmet  htmlAttributes={{ lang: 'en' }} >
    <title>{title}</title>
    <meta charSet="utf-8" />
    <meta name="theme-color" content="#000000" />
    <meta name="description" content={description} />
    <meta name="keywords" content={keywords} />
    <meta property="og:image" content={ogimage} />
  </Helmet>
  );
};

export default HelmetReact;
