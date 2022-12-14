import React from "react";

// reactstrap components
import { Card, Row, Col } from "reactstrap";

// Core Components

function ProfileCardCoaching() {
  return (
    <>
      <Card className="card-profile shadow mt--300">
        <div className="px-4">

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
                  For those who know what they want, and all they want is to book me, go<a href="https://www.honeybook.com/" target="_blank" aria-label={"book mitch through honeybook"}> here</a> (honeybook)
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
