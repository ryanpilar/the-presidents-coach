import React from "react";

// reactstrap components
import { Button, Card, CardBody, Container, Row, Col } from "reactstrap";

// Core Components

function Feature7() {
  return (
    <>
      <div className="section features-7 bg-secondary">
        <Container>
          <Row>
            <Col className="text-center mx-auto" md="8">
              <h3 className="display-3">Follow Your Heart. Embrace Struggle.  </h3>
              <p className="lead">
                What are you currently struggling with when it comes to getting off the mental treadmill? 
                I offer three fantastic coaching experiences that help you confront that struggle, and 
                achieve your Peace of Mind.
              </p>
              
            </Col>
          </Row>
          <Row className="justify-content-center mt-5">
            <Col lg="12">
              <Row className="row-grid">
                <Col lg="4">
                  <Card className="card-lift--hover shadow border-0">
                    <CardBody className="py-5">
                      <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                        <i className="ni ni-check-bold"></i>
                      </div>
                      <h6 className="text-primary text-uppercase">
                        Coach Blue
                      </h6>
                      <p className="description mt-3">
                        Because I’m here to follow my dreams and inspire other
                        people to follow their dreams, too. That’s what I’m here
                        for.
                      </p>
                      <Button
                        className="mt-4"
                        color="primary"
                        href="/coaching/blue"
                        // onClick={(e) => e.preventDefault()}
                      >
                        Learn more
                      </Button>
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="4">
                  <Card className="card-lift--hover shadow border-0">
                    <CardBody className="py-5">
                      <div className="icon icon-shape icon-shape-success rounded-circle mb-4">
                        <i className="ni ni-istanbul"></i>
                      </div>
                      <h6 className="text-success text-uppercase">
                        Coach Green
                      </h6>
                      <p className="description mt-3">
                        Society has put up so many boundaries, so many
                        limitations on what’s right and wrong that it’s almost
                        impossible.
                      </p>
                      <Button
                        className="mt-4"
                        color="success"
                        href="/coaching/green"
                        // onClick={(e) => e.preventDefault()}
                      >
                        Learn more
                      </Button>
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="4">
                  <Card className="card-lift--hover shadow border-0">
                    <CardBody className="py-5">
                      <div className="icon icon-shape icon-shape-warning rounded-circle mb-4">
                        <i className="ni ni-planet"></i>
                      </div>
                      <h6 className="text-warning text-uppercase">
                        Coach Orange
                      </h6>
                      <p className="description mt-3">
                        Why would anyone pick blue over pink? Pink is obviously
                        a better color.Everyone’s born confident, and
                        everything’s...
                      </p>
                      <Button
                        className="mt-4"
                        color="warning"
                        href="/coaching/orange"
                        // onClick={(e) => e.preventDefault()}
                      >
                        Learn more
                      </Button>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Feature7;
