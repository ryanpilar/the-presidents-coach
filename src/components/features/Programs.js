import React from "react";

// reactstrap components
import { Card, CardBody, Container, Row, Col } from "reactstrap";
import Ribbon from "./Ribbon";
// Core Components

function Programs({
  icons,
  iconStyle,
  glow,
  resetGlow,
  isGlowing,
  changeGlow,
}) {
  return (
    <>
      <div className="section features-7 bg-secondary">
        <Container>
          <Row>
            <Col className="text-center mx-auto" md="8">
              <h2 className="display-3">Offering Three Exciting Programs</h2>
            </Col>
          </Row>

          <Row className="justify-content-center mt-5">
            <Col lg="12">
              <Row className="row-grid">
                {/* CARD ONE */}
                <Col lg="4">
                  <Card className="card-lift--hover shadow border-0 ">
                    {isGlowing.coachOne ? (
                      <Ribbon
                        name={"coachOne"}
                        changeGlow={changeGlow}
                        bgColor={glow.ribbonColor}
                        borderColor={glow.coachOne.ribbonBorder}
                        icon={
                          <i className={icons.on} style={iconStyle.onIcon}></i>
                        }
                        toggle={isGlowing.coachOne}
                      />
                    ) : (
                      <Ribbon
                        name="coachOne"
                        changeGlow={changeGlow}
                        bgColor={glow.ribbonColor}
                        borderColor={glow.coachOne.ribbonBorder}
                        icon={
                          <i
                            className={icons.off}
                            style={iconStyle.offIcon}
                          ></i>
                        }
                        toggle={isGlowing.coachOne}
                      />
                    )}
                    <div
                      style={{
                        border:
                          isGlowing.coachOne &&
                          `6px solid ${glow.coachOne.ribbonBorder}`,
                        boxShadow:
                          isGlowing.coachOne &&
                          `0px 0px 17px 2px ${glow.ribbonColor}`,
                      }}
                    >
                      <CardBody className="py-5">
                        <div className="icon icon-shape icon-shape-info rounded-circle mb-4">
                          <i className="fab fa-patreon"></i>
                          {/* <i className="ni ni-check-bold"></i> */}
                        </div>
                        <h6 className="text-info text-uppercase">
                          Mitch's Patreon Campaign
                        </h6>
                        <p className="description mt-3">
                          Because I’m here to follow my dreams and inspire other
                          people to follow their dreams, too. That’s what I’m
                          here for.
                        </p>


                      </CardBody>
                    </div>
                  </Card>
                </Col>
                {/* CARD TWO */}
                <Col lg="4">
                  <Card className="card-lift--hover shadow border-0">
                    <div
                      className="box-make-relative"
                      style={{
                        position: "relative",
                      }}
                    >
                      {isGlowing.coachTwo ? (
                        <Ribbon
                          name={"coachTwo"}
                          changeGlow={changeGlow}
                          bgColor={glow.ribbonColor}
                          borderColor={glow.coachTwo.ribbonBorder}
                          icon={
                            <i
                              className={icons.on}
                              style={iconStyle.onIcon}
                            ></i>
                          }
                          toggle={isGlowing.coachTwo}
                        />
                      ) : (
                        <Ribbon
                          name="coachTwo"
                          changeGlow={changeGlow}
                          bgColor={glow.ribbonColor}
                          borderColor={glow.coachTwo.ribbonBorder}
                          icon={
                            <i
                              className={icons.off}
                              style={iconStyle.offIcon}
                            ></i>
                          }
                          toggle={isGlowing.coachTwo}
                        />
                      )}

                      {/* <Ribbon bgColor={'#f29dc0'} borderColor={'#fdc5b8'}/> */}
                      <div
                        className=""
                        style={{
                          // background: "red",
                          border:
                            isGlowing.coachTwo &&
                            `6px solid ${glow.coachTwo.ribbonBorder}`,
                          boxShadow:
                            isGlowing.coachTwo &&
                            `0px 0px 17px 2px ${glow.ribbonColor}`,
                        }}
                      >
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-success rounded-circle mb-4">
                            <i className="ni ni-istanbul"></i>
                          </div>
                          <h6 className="text-success text-uppercase">
                            Green Something
                          </h6>
                          <p className="description mt-3">
                            Society has put up so many boundaries, so many
                            limitations on what’s right and wrong that it’s
                            almost impossible.
                          </p>
                          {/* <Button
                          className="mt-4"
                          color="success"
                          href="#green"
                          // onClick={(e) => e.preventDefault()}
                        >
                          Learn more
                        </Button> */}
                        </CardBody>
                      </div>
                    </div>
                  </Card>
                </Col>

                {/* CARD THREE */}
                <Col lg="4">
                  <div>
                    <Card className=" card-lift--hover shadow border-0 ">
                      <div
                        className="box-make-relative"
                        style={{
                          position: "relative",
                        }}
                      >
                        {isGlowing.coachThree ? (
                          <Ribbon
                            name={"coachThree"}
                            changeGlow={changeGlow}
                            bgColor={glow.ribbonColor}
                            borderColor={glow.coachThree.ribbonBorder}
                            icon={
                              <i
                                className={icons.on}
                                style={iconStyle.onIcon}
                              ></i>
                            }
                            toggle={isGlowing.coachThree}
                          />
                        ) : (
                          <Ribbon
                            name="coachThree"
                            changeGlow={changeGlow}
                            bgColor={glow.ribbonColor}
                            borderColor={glow.coachThree.ribbonBorder}
                            icon={
                              <i
                                className={icons.off}
                                style={iconStyle.offIcon}
                              ></i>
                            }
                            toggle={isGlowing.coachThree}
                          />
                        )}
                        <div
                          className=""
                          style={{
                            // background: "red",
                            border:
                              isGlowing.coachThree &&
                              `6px solid ${glow.coachThree.ribbonBorder}`,
                            boxShadow:
                              isGlowing.coachThree &&
                              `0px 0px 17px 2px ${glow.ribbonColor}`,
                          }}
                        >
                          <CardBody className="py-5">
                            <div className="icon icon-shape icon-shape-warning rounded-circle mb-4">
                              <i className="ni ni-planet"></i>
                            </div>
                            <h6 className="text-warning text-uppercase">
                              Orange Launch
                            </h6>
                            <p className="description mt-3">
                              Why would anyone pick blue over pink? Pink is
                              obviously a better color.Everyone’s born
                              confident, and ...
                            </p>
                            {/* <Button
                            className="mt-4"
                            color="warning"
                            href="#orange"
                            // onClick={(e) => e.preventDefault()}
                          >
                            Learn more
                          </Button> */}
                          </CardBody>
                        </div>
                      </div>
                    </Card>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Programs;
