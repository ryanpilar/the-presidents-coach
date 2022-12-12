import React from "react";

// Core Components
import NavBarMain from "components/navbars/NavBarMain.js";
import DemoFooter from "components/footers/DemoFooter.js";
import HeaderMedia from "components/headers/HeaderMedia.js";
import Blogs1 from "components/blogs/Blogs1";
import SEO from "components/seo/SEO";

function Media() {
  
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
      <div>

      {/* SEO w/ React Helmet */}
      <SEO 
        title={`The President's Coach | Media | TV, YouTube, Patreon, Instagram, and Blog`} 
        description={`Mitch creates and distributes his content on his website, Instagram, YouTube, Patreon and Facebook. Expect to be inspired, entertained, humbled and guided.`} 
      /> 

        <NavBarMain type="primary" />
        <div className="wrapper">

          <HeaderMedia />
          <Blogs1 />
          <DemoFooter />

        </div>
      </div>
    </>
  );
}

export default Media;
