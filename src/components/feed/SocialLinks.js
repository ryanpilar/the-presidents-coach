import React from "react";
import {
    Button,
    UncontrolledTooltip,
  } from "reactstrap";

const SocialLinks = () => {
  return (
    <div>
    <Button
        className="btn-icon-only rounded-circle"
        color="twitter"
        id="tooltip46149983"
        href="mailto: mitch@mitchellcreasey.com"
        target="_blank"
      >
        <span className="btn-inner--icon2">
        {/* <i className="ni ni-email-83"></i> */}
          <i className="fa fa-envelope"></i>
        </span>
      </Button>

      <UncontrolledTooltip delay={0} target="tooltip46149983">
        Email
      </UncontrolledTooltip>

      <Button
        className="btn-icon-only rounded-circle"
        color="facebook"
        id="tooltip564081339"
        href="https://www.facebook.com/coachmitchellcreasey/"
        target="_blank"
      >
        <span className="btn-inner--icon2">
          <i className="fab fa-facebook"></i>
        </span>
      </Button>
      
      <UncontrolledTooltip delay={0} target="tooltip564081339">
        Facbook
      </UncontrolledTooltip>
      

      
      
      <Button
        className="btn-icon-only rounded-circle"
        color="linkedin"
        id="tooltip844497435"
        href="https://www.linkedin.com/in/mitchellcreasey/"
        target="_blank"
      >
        <span className="btn-inner--icon2">
          <i className="fab fa-linkedin"></i>
        </span>
      </Button>

      <UncontrolledTooltip delay={0} target="tooltip844497435">
        Linked In
      </UncontrolledTooltip>


      <Button
        className="btn-icon-only rounded-circle"
        color="instagram"
        id="tooltip564081339"
        href="https://www.instagram.com/thepresidentscoach/"
        target="_blank"
      >
        <span className="btn-inner--icon2">
          <i className="fab fa-instagram"></i>
        </span>
      </Button>

      <UncontrolledTooltip delay={0} target="tooltip564081339">
        Instagram
      </UncontrolledTooltip>

      

      
    </div>
  );
};

export default SocialLinks;
