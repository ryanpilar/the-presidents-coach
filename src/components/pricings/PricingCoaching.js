import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
} from "reactstrap";

import Ribbon from "components/features/Ribbon";
import IconsPricing from "components/presentation-page/IconsPricing";

// Core Components

function PricingCoaching({ icons, iconStyle, glow, isGlowing, changeGlow }) {
  const [activeTab, setActiveTab] = React.useState("tab1");
  return (

    <>
      <IconsPricing />
      <div className="pricing-2" id="pricing-2">
        <Container>
          {/* <Row>
            <Col className="mx-auto text-center mb-3" md="6">
              <h3 className="display-3">Alas, A price-point for everyone</h3>
              <p className="lead">
                "Although there is so much amazing content on my Patreon channel, 
                it just cannot compare to my one-on-one's. I truly wish to meet you all, I really do! 

                <br /><br />
                
                I make a positive differences in peoples lives, thats what I do. And I can do that,  
                that much faster when I can see your lovely face. Enjoy yourselves out there, Peace & Love" - Mitchel Creasey
              </p>
              
              <div className="section-space"></div>
            </Col>
          </Row> */}
          {/* <div className="space-100"></div> */}
          {/* <Row>
            <div className="nav-wrapper mx-auto mr-3 mb-3">
              <Nav
                className="nav-pills-info nav-fill flex-column flex-md-row"
                pills
                role="tablist"
              >
                <NavItem>
                  <NavLink
                    className={
                      "mb-sm-3 mb-md-0 " +
                      (activeTab === "tab1" ? "active" : "")
                    }
                    href="#pablo"
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveTab("tab1");
                    }}
                  >
                    <i className="ni ni-satisfied mr-2"></i>
                    Monthly
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={
                      "mb-sm-3 mb-md-0 " +
                      (activeTab === "tab2" ? "active" : "")
                    }
                    href="#pablo"
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveTab("tab2");
                    }}
                  >
                    <i className="ni ni-collection mr-2"></i>
                    Yearly
                  </NavLink>
                </NavItem>
              </Nav>
            </div>
          </Row> */}
          <Row>
            <Col md="4">
            
              <Card
                className="card-pricing bg-info card-background"
                data-background="image"
                style={{
                  backgroundImage:
                    "url(" + require("assets/img/ill/pricing_bg.svg") + ")",
                }}
              >
                
                <div
                  className="box-make-relative" 
                    style={{
                      position: 'relative',
                    }}
                >
                { isGlowing.coachOne ?

                  <Ribbon
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
                    style={{
                        // padding: true && '2rem 2rem 1rem 2rem',
                        border: isGlowing.coachOne && `3px solid ${glow.coachOne.ribbonBorder}`,
                        boxShadow: isGlowing.coachOne && `0px 0px 17px 10px ${glow.ribbonColor}`,
                    }}
                  >
                    <CardBody>
                      <h6 className="card-category text-white text-uppercase">
                        Starter
                      </h6>
                      <CardTitle tag="h1">
                        <small className="text-white">$</small>
                        199
                      </CardTitle>
                      <ul>
                        <li>
                          <b>10</b> Projects
                        </li>
                        <li>
                          <b>1</b> Team Members
                        </li>
                        <li>
                          <b>5</b> Personal Contacts
                        </li>
                        <li>
                          <b>500</b> Messages
                        </li>
                      </ul>
                      <Button
                        className="btn-white mt-3"
                        color="default"
                        href="/blue#contact-mitch"
                        // onClick={(e) => e.preventDefault()}
                        size="sm"
                      >
                        Get Started
                      </Button>
                    </CardBody>
                  </div>
                </div>

              </Card>
            </Col>
            <Col md="4">
              <Card
                className="card-pricing bg-success card-background"
                data-background="image"
                style={{
                  backgroundImage:
                    "url(" + require("assets/img/ill/pricing_bg.svg") + ")",
                }}
              >
                <div
                  className="box-make-relative" 
                    style={{
                      position: 'relative',
                    }}
                >
                  { isGlowing.coachTwo ?
                    <Ribbon
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
                      name='coachTwo'
                      changeGlow={changeGlow}
                      bgColor={glow.ribbonColor}
                      borderColor={glow.coachTwo.ribbonBorder}
                      icon={
                        <i
                          className={icons.off}
                          style={iconStyle.offIcon}></i>
                      }
                      toggle={isGlowing.coachTwo}
                    />
                  }

                  <div
                    style={{
                        // padding: true && '2rem 2rem 1rem 2rem',
                        border: isGlowing.coachTwo && `3px solid ${glow.coachTwo.ribbonBorder}`,
                        boxShadow: isGlowing.coachTwo && `0px 0px 17px 10px ${glow.ribbonColor}`,
                    }}
                  >
                    <CardBody>
                      <h6 className="card-category text-white text-uppercase">
                        Enterprise
                      </h6>
                      <CardTitle tag="h1">
                        <small className="text-white">$</small>
                        599
                      </CardTitle>
                      <ul>
                        <li>
                          <b>1K</b> Projects
                        </li>
                        <li>
                          <b>100</b> Team Members
                        </li>
                        <li>
                          <b>500</b> Personal Contacts
                        </li>
                        <li>
                          <b>Unlimited</b> Messages
                        </li>
                      </ul>
                      <Button
                        className="btn-white mt-3"
                        color="default"
                        href="/green#contact-mitch"
                        // onClick={(e) => e.preventDefault()}
                        size="sm"
                      >
                        Get Started
                      </Button>
                    </CardBody>
                  </div>
                </div>

              </Card>
            </Col>
            <Col md="4">
              <Card
                className="card-pricing bg-warning card-background"
                data-background="image"
                style={{
                  backgroundImage:
                    "url(" + require("assets/img/ill/pricing_bg.svg") + ")",
                }}
              >
                <div
                  className="box-make-relative" 
                    style={{
                      position: 'relative',
                }}>

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
                        // padding: true && '2rem 2rem 1rem 2rem',
                        border: isGlowing.coachThree && `3px solid ${glow.coachThree.ribbonBorder}`,
                        boxShadow: isGlowing.coachThree && `0px 0px 17px 10px ${glow.ribbonColor}`,
                    }}
                  >
                    <CardBody>
                      <h6 className="card-category text-white text-uppercase">
                        PRO
                      </h6>
                      <CardTitle tag="h1">
                        <small className="text-white">$</small>
                        399
                      </CardTitle>
                      <ul>
                        <li>
                          <b>100</b> Projects
                        </li>
                        <li>
                          <b>10</b> Team Members
                        </li>
                        <li>
                          <b>50</b> Personal Contacts
                        </li>
                        <li>
                          <b>500</b> Messages
                        </li>
                      </ul>
                      <Button
                        className="btn-white mt-3"
                        color="default"
                        href="/orange#contact-mitch"
                        // onClick={(e) => e.preventDefault()}
                        size="sm"
                      >
                        Get Started
                      </Button>
                    </CardBody>
                  </div>
                </div>

              </Card>
            </Col>
           
          </Row>
        </Container>
      </div>
    </>
  );
}

export default PricingCoaching;
