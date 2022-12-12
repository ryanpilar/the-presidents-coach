import React from "react";

// reactstrap components
import { Button, Card, Row, Col } from "reactstrap";

// Core Components

function ProfileCardCoaching({ isGlowing, resetGlow, changeGlow }) {
  return (
    <>
      <Card className="card-profile shadow mt--300">
        <div className="px-4">
          {/* <Row className="justify-content-center">
            <Col className="order-lg-2" lg="3">
              <div className="card-profile-image">
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  <img
                    alt="..."
                    className="rounded-circle"
                    src={require("assets/img/faces/team-4.jpg")}
                  ></img>
                </a>
              </div>
            </Col>
            <Col
              className="order-lg-3 text-lg-right align-self-lg-center"
              lg="4"
            >
              <div className="card-profile-actions py-4 mt-lg-0">
                <Button
                  className="mr-4"
                  // color='instagram'
                  color="info"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  size="sm"
                //   style={{paddingBlock:'auto auto'}}
                > 
                    <i className="fab fa-instagram align-middle" style={{fontSize: '1.1rem'}}></i>
                    <span className='align-middle'>Follow</span>
                </Button>
                <Button
                  className="float-right pl-3 pr-3"
                  color="default"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  size="sm"
                >
                  Message
                </Button>
              </div>
            </Col>
            <Col className="order-lg-1" lg="4">
              <div className="card-profile-stats d-flex justify-content-center"> */}
                {/* <div className='d-flex align-items-center'>
                    <i class="fab fa-instagram" style={{fontSize: '3rem'}}></i>
                    
                </div> */}
                {/* <div>
                  <span className="heading">22</span>
                  <span className="description">Friends</span>
                </div>
                <div>
                  <span className="heading">10</span>
                  <span className="description">Photos</span>
                </div>
                <div>
                  <span className="heading">89</span>
                  <span className="description">Comments</span>
                </div>
              </div>
            </Col>
          </Row> */}
          {/* <div className="text-center mt-5">
            <h3>
              Jessica Jones
              <span className="font-weight-light">, 27</span>
            </h3>
            <div className="h6 font-weight-300">
              <i className="ni location_pin mr-2"></i>
              Bucharest, Romania
            </div>
            <div className="h6 mt-4">
              <i className="ni business_briefcase-24 mr-2"></i>
              Solution Manager - Creative Tim Officer
            </div>
            <div>
              <i className="ni education_hat mr-2"></i>
              University of Computer Science
            </div>
          </div> */}
          <div className="py-5 text-center">
            <Row className="justify-content-center">
              <Col lg="9">
                <h1>Acclaimed Executive Coach</h1>
                <p>
                    Set this page up so depending on the :id queried with the url, it triggers special styling. 
                    For instance, light up all the box's that apply to the program that was clicked. And have
                    customized landig messages for them. So if there were 3 programs, then there would be 4 unique messages
                </p>
                <p>    
                  For those who know what they want, and all they want is to book me, go<a href="https://www.honeybook.com/"> here</a> (honeybook)
                </p>
                
                {/* <Button
                name="coachOne"
                className="mt-4"
                // color="shape-info"
                color={isGlowing.coachOne ? 'info' : ''}

                href="#pablo"
                onClick={(e) => { 
                  e.preventDefault()
                  changeGlow(e)
                }}
              >
                Blue
              </Button>
              <Button
                name="coachTwo"
                className="mt-4"
                // color="success"
                color={isGlowing.coachTwo ? 'success' : 'none'}

                href="#pablo"
                onClick={(e) => { 
                  e.preventDefault()
                  changeGlow(e)
                }}
              >
                Green
              </Button>
              <Button
                name="coachThree"
                className="mt-4"
                // color="warning"
                color={isGlowing.coachThree ? 'warning' : 'none'}

                href="#pablo"
                onClick={(e) => { 
                  e.preventDefault()
                  changeGlow(e)                }}
              >
                Orange
              </Button>
              <Button
                className="mt-4"
                color=""
                // color={isGlowing.coachOne ? 'danger' : 'none'}

                href="#pablo"
                onClick={(e) => { 
                  e.preventDefault()
                  resetGlow(e)
                }}
              >
                Reset
              </Button> */}
                {/* <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  Show more
                </a> */}
              </Col>
            </Row>
          </div>
        </div>
      </Card>
    </>
  );
}

export default ProfileCardCoaching;
