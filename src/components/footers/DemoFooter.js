/*eslint-disable*/

import React from "react";

// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

import SocialLinks from "components/feed/SocialLinks";

// Core Components

function DemoFooter() {
  return (
    <>
      <footer className="footer">
        <Container>
          <Row className="row-grid align-items-center mb-5">
            <Col lg="6">
              <h3 className="text-primary font-weight-light mb-2">
                Thank you for stopping by!
              </h3>
              <h4 className="mb-0 font-weight-light">
                Let's get in touch on any of these platforms.
              </h4>
            </Col>

            <Col className="text-lg-center btn-wrapper" lg="6">
              <SocialLinks />
            </Col>
          </Row>
          <hr></hr>
          <Row className="align-items-center justify-content-md-between">
            <Col md="6">
              <div className="copyright">
                made with{" "}
                <i
                  className="ni ni-favourite-28"
                  style={{ position: "relative", top: "3px", color: "#f5365c" }}
                  onMouseOver={({ target }) => (target.style.color = "#e91f63")}
                  onMouseOut={({ target }) => (target.style.color = "#515357")}
                />{" "}
                by{" "}
                <a href="https://ryan-pilar.netlify.app/" target="_blank">
                  ryanpilar
                </a>
                .
              </div>
            </Col>
            {/* <Col md="6">
              <Nav className="nav-footer justify-content-end">
                <NavItem>
                  <NavLink
                    href="https://www.creative-tim.com/?ref=adspr-footer"
                    target="_blank"
                  >
                     ryanpilar
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    href="https://www.creative-tim.com/presentation?ref=adspr-footer"
                    target="_blank"
                  >
                    About Us
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    href="https://www.creative-tim.com/blog?ref=adspr-footer"
                    target="_blank"
                  >
                    Blog
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    href="https://www.creative-tim.com/license?ref=adspr-footer"
                    target="_blank"
                  >
                    License
                  </NavLink>
                </NavItem>
              </Nav>
            </Col> */}
          </Row>
        </Container>
      </footer>
    </>
  );
}

export default DemoFooter;
