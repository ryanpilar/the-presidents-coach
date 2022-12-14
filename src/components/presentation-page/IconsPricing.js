/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// Core Components

function IconsPricing() {
  return (
    <>
      <section className="section-icons mb-5">
        <Container fluid>
          <Row>
            <Col lg="3" sm="2">
              <div className="icons-nucleo">
                <i className="first-left-icon ni ni-send text-primary"></i>
                <i className="second-left-icon ni ni-alert-circle-exc text-warning"></i>
                <i className="third-left-icon ni ni-cart text-info"></i>
                <i className="fourth-left-icon ni ni-bold text-default"></i>
                <i className="fifth-left-icon ni ni-headphones text-danger"></i>
                <i className="sixth-left-icon ni ni-satisfied text-success"></i>
                <i className="seventh-left-icon ni ni-cart text-pink"></i>
                <i className="eighth-left-icon ni ni-spaceship text-info"></i>
                <i className="ninth-left-icon ni ni-sound-wave text-warning"></i>
                <i className="tenth-left-icon ni ni-heart-2 text-danger"></i>
              </div>
            </Col>
            <Col className="text-center" lg="6" sm="8">
              <h3 className="display-3">Alas, A price-point for everyone</h3>
              <p className="lead">
                "Peruse my instagram, 
                study my patreon content, or take full advantage of my attention and sign 
                up for my ORANGE coaching program. I truly wish to meet you all one day, I really do! Peace and love! 

                
              </p>
              
              {/* <div className="section-space"></div> */}

              {/* <h2 className="display-2">My Fantastic Content</h2>
              <p className="lead">
                Something about the quality of my work, my ability to solve, my ability to 
                relate and see to the problem. Instagram. Telegram. YouTube. One-on-One. TV. 
                I calm, I lower stress, I point to where you can find the solution.
                {" "}
                <a href="https://nucleoapp.com/?ref=1712" target="_blank">
                  NucleoApp
                </a>
                . The official package contains over 20.729 icons which are
                looking great in combination with Argon Design System PRO. Make
                sure you check all of them and use those that you like the most.
              </p> */}
              {/* <br></br>
              <Button
                className="btn-round"
                color="primary"
                href="https://www.creative-tim.com/learning-lab/reactstrap/icons/argon-design-system"
                target="_blank"
              >
                My Bio
              </Button>
              <Button
                className="btn-round"
                color="primary"
                href="https://nucleoapp.com/?ref=1712"
                outline
                target="_blank"
              >
                Contact
              </Button> */}
            </Col>
            <Col lg="3" sm="2">
              <div className="icons-nucleo icons-nucleo-right text-success">
                <i className="first-right-icon ni ni-palette text-warning"></i>
                <i className="second-right-icon ni ni-tie-bow text-primary"></i>
                <i className="third-right-icon ni ni-pin text-info"></i>
                <i className="fourth-right-icon ni ni-key-25 text-purple"></i>
                <i className="fifth-right-icon ni ni-istanbul text-danger"></i>
                <i className="sixth-right-icon ni ni-bus-front-12 text-warning"></i>
                <i className="seventh-right-icon ni ni-image-02 text-success"></i>
                <i className="eighth-right-icon ni ni-world text-info"></i>
                <i className="ninth-right-icon ni ni-puzzle-10 text-primary"></i>
                <i className="tenth-right-icon ni ni-atom text-default"></i>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default IconsPricing;
