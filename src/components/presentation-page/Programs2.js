import React from "react";
import GitHubButton from "react-github-button";
// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardTitle,
  Container,
  Row,
  Col,
} from "reactstrap";

import Ribbon from "components/features/Ribbon";

// Core Components

function Programs2({ icons, iconStyle, glow, isGlowing, changeGlow }) {
  return (
    <>
      <section className="section-free-demo bg-secondary skew-separator">
        <Container>
          <Row>

            <Col lg="7" md="12">
              <div className="section-description" id="free-demo-github-button">
                <h2 className="display-3 ">More about Mitch's awesome programs</h2>
                <br></br><br></br>
                <div 
                  className="box-make-relative" 
                  style={{
                    position: 'relative',
                  }}
                >
                  { isGlowing.coachOne ?
                    <Ribbon
                      key={1}
                      name={'coachOne'}
                      changeGlow={changeGlow}
                      bgColor={glow.ribbonColor}
                      borderColor={glow.coachOne.ribbonBorder}
                      icon={
                        <i
                          className={icons.on}
                          style={ iconStyle.onIcon }>
                        </i>
                      }
                      toggle={isGlowing.coachOne}
                    /> :
                    
                    <Ribbon
                      key={2}
                      name='coachOne'
                      changeGlow={changeGlow}
                      bgColor={glow.ribbonColor}
                      borderColor={glow.coachOne.ribbonBorder}
                      icon={
                        <i
                          className={icons.off}
                          style={iconStyle.offIcon }></i>
                      }
                      toggle={isGlowing.coachOne}
                    />
                  }  

                  <div
                    id='blue'
                    style={{
                      padding: isGlowing.coachOne && '2rem 2rem 1rem 2rem',
                      border: isGlowing.coachOne && `3px solid ${glow.coachOne.ribbonBorder}`,
                      boxShadow: isGlowing.coachOne && `0px 0px 17px 2px ${glow.ribbonColor}`,
                    }}
                  >
                    <h2 className='text-info'>Patreon is simply great</h2>
                    <p className="lead mb-4">
                      This is the best way to interact with my content. Consume at your leisure!
                      Find peace of find in your own home, office, or by a beautiful spot by the river!
                      You can expect to see short and long form written content. Short and long form audio
                      clippings and podcasts. And I can't forget my favorite, videos!
                    </p>
                    
                    <div className="github-buttons">
                      <Button
                        className="btn-round"
                        color="info"
                        href="https://www.patreon.com/"
                        target="_blank"
                      >
                        View Mitch's Patreon
                      </Button>
                      {/* <div className="github-button">
                        <GitHubButton
                          type="stargazers"
                          size="large"
                          namespace="creativetimofficial"
                          repo="argon-design-system-react"
                        />
                      </div> */}

                      
                    </div>
                  </div>
                </div>
              </div>
            </Col>

            <Col lg="5" md="12">
              <div className="github-background-container">
                {/* <i className="fab fa-github"></i> */}
                <i className="fab fa-patreon"></i>
                {/* <i class="fab fa-youtube"></i> */}
                {/* <i class="fab fa-instagram"></i> */}
                {/* <i class="fab fa-vimeo-v"></i> */}
              </div>
            </Col>
          </Row>
          
          <Row>
          
            <Col className="pt-5" lg="4" md="6">
              
              <Card className="card-pricing card-background">
                <div 
                
                  className="box-make-relative" 
                  style={{
                    position: 'relative',
                    zIndex: '100',
                  }}
                >
                  { isGlowing.coachTwo ?
                    <Ribbon
                      key={3}
                      name={'coachTwo'}
                      changeGlow={changeGlow}
                      bgColor={glow.ribbonColor}
                      borderColor={glow.coachTwo.ribbonBorder}
                      icon={
                        <i
                          className={icons.on}
                          style={ iconStyle.onIcon }>
                        </i>
                      }
                      toggle={isGlowing.coachTwo}
                    /> :
                    
                    <Ribbon
                      key={4}
                      name='coachTwo'
                      changeGlow={changeGlow}
                      bgColor={glow.ribbonColor}
                      borderColor={glow.coachTwo.ribbonBorder}
                      icon={
                        <i
                          className={icons.off}
                          style={iconStyle.offIcon }></i>
                      }
                      toggle={isGlowing.coachTwo}
                    />
                  }

                  <div
                    style={{
                      border: isGlowing.coachTwo && `3px solid ${glow.coachTwo.ribbonBorder}`,
                      boxShadow: isGlowing.coachTwo && `0px 0px 17px 2px ${glow.ribbonColor}`,
                    }}
                  >
                    <CardBody >
                      <CardTitle className="text-success text-left ml-2" tag="h2">
                        Green Demo
                      </CardTitle>
                      <ul>
                        <li className="text-left">
                          <strong>70</strong> Components
                        </li>
                        <li className="text-left">
                          <strong>3</strong> Example Pages
                        </li>
                        <li className="text-left">
                          <Badge className="badge-circle" color="success">
                            <i className="ni ni-check-bold text-white"></i>
                          </Badge>{" "}
                          Uncoventional cards
                        </li>
                        <li className="text-left">
                          <Badge className="badge-circle" color="success">
                            <i className="ni ni-check-bold text-white"></i>
                          </Badge>{" "}
                          Sections
                        </li>
                        <li className="text-left">
                          <Badge className="badge-circle" color="success">
                            <i className="ni ni-check-bold text-white"></i>
                          </Badge>{" "}
                          Photoshop for Prototype
                        </li>
                        <li className="text-left">
                          <Badge className="badge-circle" color="success">
                            <i className="ni ni-check-bold text-white"></i>
                          </Badge>{" "}
                          Premium Support
                        </li>
                      </ul>
                    </CardBody>
                  </div>
                </div>
              </Card>
              
            </Col>
            <Col className="pt-5" lg="4" md="6">
              <Card className="card-pricing card-background">
                <div 
                  style={{
                    position: 'relative',
                  }}
                >
                  { isGlowing.coachThree ?
                    <Ribbon
                      name={'coachThree'}
                      changeGlow={changeGlow}
                      bgColor={glow.ribbonColor}
                      borderColor={glow.coachThree.ribbonBorder}
                      icon={
                        <i
                          className={icons.on}
                          style={iconStyle.onIcon}>
                        </i>
                      }
                      toggle={isGlowing.coachThree}
                    /> :
                    
                    <Ribbon
                      name='coachThree'
                      changeGlow={changeGlow}
                      bgColor={glow.ribbonColor}
                      borderColor={glow.coachThree.ribbonBorder}
                      icon={
                        <i
                          className={icons.off}
                          style={iconStyle.offIcon}></i>
                      }
                      toggle={isGlowing.coachThree}
                    />
                  }
                  <div 
                    style={{
                      border: isGlowing.coachThree && `3px solid ${glow.coachThree.ribbonBorder}`,
                      boxShadow: isGlowing.coachThree && `0px 0px 17px 2px ${glow.ribbonColor}`,
                    }}
                  >
                    <CardBody >
                      <CardTitle className="text-warning text-left ml-2" tag="h2">
                        Orange Demo
                      </CardTitle>
                      <ul>
                        <li className="text-left">
                          <strong>1100+</strong> Components
                        </li>
                        <li className="text-left">
                          <strong>17</strong> Example Pages
                        </li>
                        <li className="text-left">
                          <Badge className="badge-circle" color="warning">
                            <i className="ni ni-check-bold text-white"></i>
                          </Badge>{" "}
                          Uncoventional cards
                        </li>
                        <li className="text-left">
                          <Badge className="badge-circle" color="warning">
                            <i className="ni ni-check-bold text-white"></i>
                          </Badge>{" "}
                          Sections
                        </li>
                        <li className="text-left">
                          <Badge className="badge-circle" color="warning">
                            <i className="ni ni-check-bold text-white"></i>
                          </Badge>{" "}
                          Photoshop for Prototype
                        </li>
                        <li className="text-left">
                          <Badge className="badge-circle" color="warning">
                            <i className="ni ni-check-bold text-white"></i>
                          </Badge>{" "}
                          Premium Support
                        </li>
                      </ul>
                    </CardBody>
                  </div>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Programs2;
