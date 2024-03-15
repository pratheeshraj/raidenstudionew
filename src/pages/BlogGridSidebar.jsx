import React, { Fragment, Suspense, useEffect, useState } from "react";
import Preloader from "../elements/Preloader";
import HeaderOne from "../components/HeaderOne";
import Breadcrumb from "../components/Breadcrumb";
import BlogGridSidebarSection from "../components/BlogGridSidebarSection";
import NewsSectionOne from "../components/NewsSectionOne";
import FooterSectionOne from "../components/FooterSectionOne";
import HelmetReact from "../elements/HelmetReact";
import HeaderTwo from "../components/HeaderTwo";
import { useDispatch } from "react-redux";
import { GetAllBlogs, GetBlogsCategory, GetRecentBlogs } from "../action/BlogAction";

const BlogGridSidebar = () => {
  const dispatch =useDispatch()
  
  let [active, setActive] = useState(true);
  useEffect(() => {
    setTimeout(function () {
      setActive(false);
    }, 2000);
    dispatch(GetAllBlogs)
    dispatch(GetRecentBlogs)
    dispatch(GetBlogsCategory)
  }, []);

  return (
    <Fragment>
      <Suspense>
        {active === true && <Preloader />}
        {/* Helmet */}
        <HelmetReact title={"Blog Grid Sidebar"} />
        {/* Header one */}
        <HeaderTwo />
        {/* Breadcrumb */}
        <Breadcrumb data={"Blog Grid Sidebar"} />
        {/* Blog Grid Sidebar*/}
        <BlogGridSidebarSection />
        {/* News Section One */}
        <NewsSectionOne />
        {/* Footer Section */}
        <FooterSectionOne />
      </Suspense>
    </Fragment>
  );
};

export default BlogGridSidebar;
