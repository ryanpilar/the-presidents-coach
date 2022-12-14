import React from "react";

// Core Components
import NavBarMain from "components/navbars/NavBarMain.js";
import DemoFooter from "components/footers/Footer6.js";
import Header from "components/headers/Header.js";
import Team1 from "components/teams/Team1.js";
import Feature7 from "components/features/Feature7.js";
import Blogs from "components/blogs/Blogs.js";

import Icons from "components/presentation-page/Icons";
import Testimonials1 from "components/testimonials/Testimonials1";
import Contact from "components/contact-us/Contact";

import SEO from "components/seo/SEO";

import { useParams } from "react-router-dom";

function Home() {
  // const [clickedProgram, setClickedProgram] = React.useState({autoMsg: 'none'})
  const { color } = useParams();
  const clickedProgram = color;

  const formMessages = {
    blue: `Hey Mitch!\n\nI really like the sound of your 💙 BLUE 💙 coaching experience. When can we schedule our first meet-up and what do you need from me to make this happen? 🔥`,
    green: `Hey Mitch!\n\nI really like the sound of your 💚 GREEN 💚 coaching experience. When can we schedule our first meet-up and what do you need from me to make this happen? 🔥`,
    orange: `Hey Mitch!\n\nI really like the sound of your 🧡 Orange 🧡 coaching experience. When can we schedule our first meet-up and what do you need from me to make this happen? 🔥`,
    none: "",
  };

  const decideFormMessage = () => {
    // console.log('decideFormMessage - PARAMS', color, formMessages.blue)
    if (clickedProgram === "blue") {
      return formMessages.blue;
    } else if (clickedProgram === "green") {
      return formMessages.green;
    } else if (clickedProgram === "orange") {
      return formMessages.orange;
    } else {
      return formMessages.none;
    }
  };

  const [appData, setAppData] = React.useState(null);

  // const callBackendAPI = async () => {
  //   const response = await fetch('/app');
  //   const body = await response.json();

  //   if (response.status !== 200) {
  //     throw Error(body.message)
  //   }
  //   return body;
  // };

  // React.useEffect(() => {
  //   callBackendAPI()
  //     .then(res => console.log('res', res))
  //     // .then(data => console.log('data', data))
  //     // .then(res => setAppData({ data: res.express }))
  //     .catch(err => console.log(err));
  // }, [])

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
      {appData && console.log("appData", appData)}
      {/* SEO w/ React Helmet */}
      <SEO
        title={`The President's Coach | helping professionals find their peace`}
        description={
          "Mitchell Creasey designs and runs coaching programs curated to successfull professionals. He specializes in helping people pleasers, perfectionists, and self-doubters get calm, clear, and confident. As Seen on TV!"
        }
      />

      <div>
        {/* <DemoNavbar type="transparent" /> */}

        <NavBarMain type="primary" />
        <div className="wrapper">

          <Header
            bgImg={
              "https://res.cloudinary.com/ryan-pilar/image/upload/q_auto/v1671047439/presidents-coach/headers/mitch-portrait-color_pkcwin-min_hbzgfi.png"
            }
            profileImg={
"https://res.cloudinary.com/ryan-pilar/image/upload/q_auto/v1671045203/presidents-coach/profile/mitch-mugshot-min_uaudge.jpg"            }
          />

          <Feature7 />

          <Team1
            miscImg1={
              "https://res.cloudinary.com/ryan-pilar/image/upload/q_auto/v1671045789/presidents-coach/misc/mitch-field-crop-min_xl2ccx.png"
            }
            miscImg2={
              "https://res.cloudinary.com/ryan-pilar/image/upload/q_auto/v1671047808/presidents-coach/media/mitch-horse-2-min_mlnobs.png"
            }
            miscImg3={
              "https://res.cloudinary.com/ryan-pilar/image/upload/q_auto/v1671044807/presidents-coach/misc/mitch-concert-singing-min_zjekzh.jpg"
            }
            miscImg4={
              "https://res.cloudinary.com/ryan-pilar/image/upload/q_auto/v1671045274/presidents-coach/media/horse-head-tilt-min_stsywk.png"
            }
          />
          <Icons />
          <Blogs 
            instaImage={"https://res.cloudinary.com/ryan-pilar/image/upload/q_auto/v1671045604/presidents-coach/misc/damian-min_j0lmzx.jpg"}
            blogImage={"https://res.cloudinary.com/ryan-pilar/image/upload/q_auto/v1668475225/presidents-coach/misc/ashim_qkzynr.jpg"}
            instaImage2={"https://res.cloudinary.com/ryan-pilar/image/upload/q_auto/v1671045582/presidents-coach/misc/beautiful-young-girl-with-longboard-sunny-weather_Medium_-min_mkkv9w.jpg"}
            blogImage2={"https://res.cloudinary.com/ryan-pilar/image/upload/q_auto/v1671045290/presidents-coach/media/horse-laughing-min_mk4jqj.jpg"}
          />
          {/* <Cards /> */}
          <Testimonials1 
            testimonialImg={"https://res.cloudinary.com/ryan-pilar/image/upload/q_auto/v1671045741/presidents-coach/testimonials/fezbot-min_kds4cn.jpg"}
            testimonialImg2={"https://res.cloudinary.com/ryan-pilar/image/upload/q_auto/v1668474982/presidents-coach/testimonials/brooke-cagle_b1j3gl.jpg"}
            testimonialImg3={"https://res.cloudinary.com/ryan-pilar/image/upload/q_auto/v1671045701/presidents-coach/testimonials/josh-appel-min_fce79m.jpg"}
            testimonialImg4={"https://res.cloudinary.com/ryan-pilar/image/upload/q_auto/v1668475374/presidents-coach/testimonials/lucy_nxqpfy.jpg"}
          />

          <br></br>
          <br></br>
          {/* <Header6 /> */}
          {/* <Pricing5 /> */}

          <Contact autoMsg={decideFormMessage()} />

          <DemoFooter />
        </div>
      </div>
    </>
  );
}

export default Home;
