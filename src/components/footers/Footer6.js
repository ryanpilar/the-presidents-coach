import React from "react";

// reactstrap components
import {

  Container,
  Row,
} from "reactstrap";

// Core Components

function Footer6() {
  return (
    <>
      <footer className="footer footer-big bg-gradient-default">
        <Container>
          <div className="content">
            <Row className="mb-5">
              <div className="column mx-auto">
                <img
                  alt="..."
                  className="logo logo-sm"
                  src={require("assets/img/brand/blue.png")}
                ></img>
              </div>
            </Row>
            {/* <Row>
              <Col md="2" xs="6">
                <div className="column">
                  <h4 className="mb-4">About Us</h4>
                  <ul className="links-vertical">
                    <li>
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        Our mission
                      </a>
                    </li>
                    <li>
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        Media Kit
                      </a>
                    </li>
                    <li>
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col md="2" xs="6">
                <div className="column">
                  <h4 className="mb-4">Social</h4>
                  <ul className="links-vertical">
                    <li>
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        Community
                      </a>
                    </li>
                    <li>
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        Dribbble
                      </a>
                    </li>
                    <li>
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        Twitter
                      </a>
                    </li>
                    <li>
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        Facebook
                      </a>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col md="8">
                <div className="column">
                  <h4 className="mb-4">Newsletter</h4>
                  <ul className="links-vertical">
                    <p>
                      We handpicked the most interesting content for you. No
                      spam. It takes one click to unsubscribe. Give it a try!
                    </p>
                  </ul>
                  <Form action="" className="form form-newsletter" method="">
                    <FormGroup>
                      <Input placeholder="Your Email" type="email"></Input>
                    </FormGroup>
                    <Button color="primary" name="button" type="button">
                      Subscribe
                    </Button>
                  </Form>
                </div>
              </Col>
            </Row> */}
          </div>
          <hr className="bg-white opacity-3"></hr>
          <div className="column">
            <div className="d-flex justify-content-center">
              <div className="copyright">
                made with{" "}
                <i
                  className="ni ni-favourite-28"
                  style={{ position: "relative", top: "3px", color: "#f5365c" }}
                  onMouseOver={({ target }) => (target.style.color = "#e91f63")}
                  onMouseOut={({ target }) => (target.style.color = "#515357")}
                />{" "}
                by{" "}
                <a href="https://ryan-pilar.netlify.app/" target="_blank" rel="noreferrer">
                  ryanpilar
                </a>
                .
              </div>
            </div>
          </div>
        </Container>
      </footer>
    </>
  );
}

export default Footer6;
