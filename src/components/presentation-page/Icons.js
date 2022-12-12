/*eslint-disable*/
import React from "react";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

// Core Components

function Icons() {
  return (
    <>
      <section className="section-icons mb-5">
        <Container fluid>
          <Row>
            <Col lg="3" sm="2">
              <div className="icons-nucleo">
                <i className="first-left-icon ni ni-send text-primary"></i>
                <i className="second-left-icon ni ni-alert-circle-exc text-warning"></i>
                <i className="third-left-icon ni ni-like-2 text-info"></i>
                <i className="fourth-left-icon ni ni-bold text-default"></i>
                <i className="fifth-left-icon ni ni-headphones text-danger"></i>
                <i className="sixth-left-icon ni ni-satisfied text-success"></i>
                <i className="seventh-left-icon ni ni-trophy text-pink"></i>
                <i className="eighth-left-icon ni ni-spaceship text-info"></i>
                <i className="ninth-left-icon ni ni-sound-wave text-warning"></i>
                <i className="tenth-left-icon ni ni-heart-2 text-danger"></i>
              </div>
            </Col>
            <Col className="text-center" lg="6" sm="8">
              <h2 className="display-2">My Fantastic Content</h2>
              <p className="lead">
                Something about the content quality, what you like producing and
                how you achive that, my ability to solve, Instagram. Telegram. YouTube.
                One-on-One. TV. I calm, I lower stress, I point to where you can
                find the solution.{" "}
              </p>
              <br></br>

              <Button
                className="btn-round"
                color="primary"
                href="/media"
                // target="_blank"
              >
                Visit My Blog
              </Button>
              <Button
                className="btn-round"
                color="danger"
                href="/coaching"
                outline
                // target="_blank"
              >
                My Coaching
              </Button>
            </Col>
            <Col lg="3" sm="2">
              <div className="icons-nucleo icons-nucleo-right text-success">
                <i className="first-right-icon ni ni-palette text-success"></i>
                <i className="second-right-icon ni ni-tie-bow text-primary"></i>
                <i className="third-right-icon ni ni-pin text-info"></i>
                <i className="fourth-right-icon ni ni-favourite-28 text-purple"></i>
                <i className="fifth-right-icon ni ni-istanbul text-danger"></i>
                <i className="sixth-right-icon ni ni-note-03 text-warning"></i>
                <i className="seventh-right-icon ni ni-image-02 text-success"></i>
                <i className="eighth-right-icon ni ni-world text-info"></i>
                <i className="ninth-right-icon ni ni-puzzle-10 text-primary"></i>
                <i className="tenth-right-icon ni ni-diamond text-default"></i>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Icons;
