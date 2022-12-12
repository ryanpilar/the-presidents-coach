import React from "react";

// reactstrap components
// import {
//
// } from "reactstrap";

// Core Components
import DemoNavbar from "components/navbars/DemoNavbar.js";
// import DemoFooter from "components/footers/DemoFooter.js";
import DemoFooter from "components/footers/Footer6.js";
import Header1 from "components/headers/Header1.js";
import HeaderPresentation from "components/headers/HeaderPresentation.js";
import Team1 from "components/teams/Team1.js"
import Feature6 from "components/features/Feature6.js";
import Feature7 from "components/features/Feature7.js";
import Blogs from "components/blogs/Blogs.js";
import Pricing5 from "components/pricings/Pricing5.js";

import Cards from "components/presentation-page/Cards";
import Icons from "components/presentation-page/Icons";
import Testimonials1 from "components/testimonials/Testimonials1";
import Contact from "components/contact-us/ContactUs4"

import Header6 from "components/headers/Header6";

function LandingPage() {
  
  // React.useEffect(() => {
  //   document.body.classList.add("landing-page");
  //   window.scrollTo(0, 0);
  //   document.body.scrollTop = 0;
  //   return function cleanup() {
  //     document.body.classList.remove("landing-page");
  //   };
  // });

  React.useEffect(() => {
    document.body.classList.add("presentation-page");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    var href = window.location.href.substring(
      window.location.href.lastIndexOf("#") + 1
    );
    if (
      window.location.href.lastIndexOf("#") > 0 &&
      document.getElementById(href)
    ) {
      document.getElementById(href).scrollIntoView();
    }
    return function cleanup() {
      document.body.classList.remove("presentation-page");
    };
  });
  return (
    <>
      <div className='presentation-page'>
        {/* <DemoNavbar type="transparent" /> */}

        <DemoNavbar type="primary" />
        <div className="wrapper">
          <HeaderPresentation />
          {/* <Header1 /> */}
          {/* <Feature6 /> */}
          
          <Feature7 />
          <Team1 />
          <Icons />
          <Blogs />
          {/* <Cards /> */}
          <Testimonials1 />

          <br></br>
          <br></br>
          {/* <Header6 /> */}
          {/* <Pricing5 /> */}
          <Contact />
          <DemoFooter />
        </div>
      </div>
    </>
  );
}

export default LandingPage;
