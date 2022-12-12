import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  UncontrolledCollapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardText,
  CardTitle,
  UncontrolledTooltip,
} from "reactstrap";

import NavBarMain from "components/navbars/NavBarMain";
import ProfileCardMedia from "components/cards/ProfileCardMedia";
import SocialLinks from "components/feed/SocialLinks";

// Core Components

function Header1() {
  return (
    <>
      <header className="header-1 ">
        <div className="page-header">
          <div
            className="page-header-image"
            style={{
              backgroundRepeat: "no-repeat",
              backgroundImage:
                "url(" +
                require("assets/img/ill/mitch-portrait-color.png") +
                ")",
            }}
          ></div>
          <Container>
            <Row>
              <Col
                className="mr-auto text-left d-flex justify-content-center flex-column mt-5"
                lg="6"
                md="8"
              >
                <Card
                  style={{
                    width: "100%",
                    backgroundColor: `rgba(245, 245, 245, 0.8)`,
                  }}
                >
                  <div
                    style={
                      {
                        // border: "1px solid #5e72e4",
                        // borderRadius: "3px",
                        // margin: ".1rem",
                      }
                    }
                  >
                    <div
                      style={
                        {
                          // border: "1px solid #d5807c",
                          // borderRadius: "2px",
                          // margin: ".1rem",
                        }
                      }
                    >
                      {/* <Col className="order-lg-2" lg="3"> */}
                      <div
                        className="text-center"
                        style={{
                          position: "absolute",
                          top: "-42px",
                        }}
                      >
                        {/* <div className="oreo-filling"> */}
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          <img
                            alt="..."
                            width={"25%"}
                            className="rounded-circle"
                            src={require("assets/img/faces/mitch-mugshot.png")}
                          />
                        </a>
                        {/* </div> */}
                      </div>
                      {/* </Col> */}
                      <CardBody>
                        <CardTitle>
                          <h5 className="text-center mt-6">Mitchell Creasey</h5>
                        </CardTitle>
                        <h1 className="text-center display-3">
                          The President's Coach
                        </h1>
                        <CardText className="lead mt-0">
                          I am a creator, mentor, TV personality, father,
                          partner in crime and your meassured friend. It thrills
                          me to help out my people!
                        </CardText>
                        <CardText className="lead mt-0">
                          One of my passions in life is to design and run
                          coaching programs for successfull professionals. You
                          have come to the right place... lets do this!
                        </CardText>
                        <div className="text-center buttons">
                          <Button
                            color=""
                            href="/media"
                            // onClick={(e) => e.preventDefault()}
                          >
                            My Media
                          </Button>
                          <Button
                            color=""
                            href="/coaching"
                            // onClick={(e) => e.preventDefault()}
                          >
                            Coaching
                          </Button>
                          <Button
                            color=""
                            href="https://www.honeybook.com/"
                            target="_blank"
                            // onClick={(e) => e.preventDefault()}
                          >
                            Book Me
                          </Button>
                        </div>
                        <div className="text-center btn-wrapper mt-3">
                          <SocialLinks />
                        </div>
                      </CardBody>
                    </div>
                  </div>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </header>
    </>
  );
}

export default Header1;
