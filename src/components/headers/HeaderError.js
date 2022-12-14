import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {

  Container,

} from "reactstrap";


// Core Components
import DemoFooter from "components/footers/DemoFooter.js";
import ProfileCardError from "components/cards/ProfileCardError";
// Core Components

function HeaderCoaching() {

  return (
    <>
      <div className="wrapper">
        <section className="section-profile-cover section-shaped my-0">
          <img
            alt="..."
            className="bg-image"
            src={require("assets/img/farm/AdobeStock_401750930_Preview.jpeg")}
            // src={require("assets/img/ill/mitch-field.png")}
            // src={require("assets/img/ill/mitch-suit.png")}
            // src={require("assets/img/ill/mitch-doorway.png")}
            // src={require("assets/img/ill/mitch-warm-yellow-room.png")}
            
            style={{ width: "100%" }}
          ></img>
          <div className="separator separator-bottom separator-skew">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="fill-secondary"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </section>
        <section className="section bg-secondary">
          <Container>
            <ProfileCardError />
          </Container>
        </section>
        {/* <DemoFooter /> */}
      </div>
    </>
  );
}

export default HeaderCoaching;
