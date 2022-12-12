import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Form,
  Input,
  Media,
  Row,
  Col,
  UncontrolledTooltip,
  PaginationLink,
} from "reactstrap";

// Core Components

function SocialExample2( {instaLink} ) {
  return (
    <>
      <Card>
        {/* <CardHeader>
          <h5 className="h3 mb-0">Activity feed</h5>
        </CardHeader> */}
        <CardHeader className="d-flex align-items-center">
          <div className="d-flex align-items-center">
            <a href="#pablo" onClick={(e) => e.preventDefault()}>
              <img
                alt="..."
                className="avatar"
                style={{
                  // background: '#fa0386',
                  border: "1px solid #fa0386",
                }}
                src={require("assets/img/faces/mitch-mugshot.png")}
              ></img>
            </a>
            <div className="mx-3">
              <a
                className="text-dark font-weight-600 text-sm"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                The President's Coach
              </a>
              <small className="d-block text-muted">3 days ago</small>
            </div>
          </div>
          <div className="text-right ml-auto">
            <Button
              className="btn-icon"
              color="primary"
              href="https://www.instagram.com/thepresidentscoach/"
              target="_blank"
              size="sm"
              type="button"
            >
              <span className="btn-inner--icon icon-big">
                <i className="ni ni-fat-add"></i>
              </span>
              <span className="btn-inner--text">Follow</span>
            </Button>
          </div>
        </CardHeader>
        <CardBody>

          <a href={instaLink} target={'_blank'}>
            <img
              alt="..."
              className="img-fluid rounded"
              src={require("assets/img/sections/mitch-skateboarding.png")}
              // src={require("assets/img/sections/skateboard-leaning-against-wall.jpg")}
            ></img>
          </a>
          <p>How often do you believe your body? </p>

          <p>
            Sometimes? All the time? Never? It’s said that the body doesn’t lie.
            That’s true.<strong> But your thoughts do</strong>.
          </p>

          <p>😱 scared does not mean that it’s not meant to be.</p>

          <p>😔 Sad does not mean you’ve lost, or are being ignored.</p>

          <p>😡 Angry does not mean the whole world is against you.</p>

          <br></br>

          <p>
            These feelings are the body's response to your perception.{" "}
            <strong>So clean up your perception</strong>…
          </p>

          <p>scared, sad, and angry become calm, clear, and confident 💪</p>

          <br></br>

          <p>❤️ The President’s Coach</p>

          <p>
            <a href={instaLink}>
              #florida #sunshine #cruising #longboard #barefoot #sad #angry
              #scared #calm #clear #confident #bodytalk #perception #feelings
              #coach #coaching #executivecoach #truth
            </a>
          </p>

          
          <Row className="align-items-center my-3 pb-3 border-bottom">
            <Col sm="6">
              <div className="icon-actions">
                <a
                  className="like active"
                  href={instaLink}
                  target='_blank'
                >
                  <i className="ni ni-like-2"></i>
                  <span className="text-muted">70</span>
                </a>
                <a target='_blank'href={instaLink} >
                  <i className="ni ni-chat-round"></i>
                  <span className="text-muted">12</span>
                </a>
                <a target='_blank'href={instaLink} >
                  <i className="ni ni-curved-next"></i>
                  <span className="text-muted">5</span>
                </a>
              </div>
            </Col>
            <Col className="d-none d-sm-block" sm="6">
              <div className="d-flex align-items-center justify-content-sm-end">
                <div className="avatar-group">
                  <a
                    className="avatar avatar-xs rounded-circle"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    id="tooltip777026221"
                  >
                    <img
                      alt="..."
                      src={require("assets/img/faces/team-1.jpg")}
                    ></img>
                  </a>
                  <UncontrolledTooltip delay={0} target="tooltip777026221">
                    Jessica Rowland
                  </UncontrolledTooltip>
                  <a
                    className="avatar avatar-xs rounded-circle"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    id="tooltip386481262"
                  >
                    <img
                      alt="..."
                      className="rounded-circle"
                      src={require("assets/img/faces/team-2.jpg")}
                    ></img>
                  </a>
                  <UncontrolledTooltip delay={0} target="tooltip386481262">
                    Audrey Love
                  </UncontrolledTooltip>
                  <a
                    className="avatar avatar-xs rounded-circle"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    id="tooltip508888926"
                  >
                    <img
                      alt="..."
                      className="rounded-circle"
                      src={require("assets/img/faces/team-3.jpg")}
                    ></img>
                  </a>
                  <UncontrolledTooltip delay={0} target="tooltip508888926">
                    Michael Lewis
                  </UncontrolledTooltip>
                </div>
                <small className="pl-2 font-weight-bold">and 12+ more</small>
              </div>
            </Col>
          </Row>
          {/* <div className="mb-1">
            <Media className="media-comment">
              <img
                alt="..."
                className="media-comment-avatar rounded-circle"
                src={require("assets/img/faces/team-1.jpg")}
              ></img>
              <Media>
                <div className="media-comment-text">
                  <h6 className="h5 mt-0">Michael Lewis</h6>
                  <p className="text-sm lh-160">
                    You have the opportunity to play this game of life you need
                    to appreciate every moment. A lot of people don’t appreciate
                    the moment until it’s passed.
                  </p>
                  <div className="icon-actions">
                    <a
                      className="like active"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="ni ni-like-2"></i>
                      <span className="text-muted">3 likes</span>
                    </a>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <i className="ni ni-curved-next"></i>
                      <span className="text-muted">2 shares</span>
                    </a>
                  </div>
                </div>
              </Media>
            </Media>
            <Media className="media-comment">
              <img
                alt="..."
                className="media-comment-avatar rounded-circle"
                src={require("assets/img/faces/team-2.jpg")}
              ></img>
              <Media>
                <div className="media-comment-text">
                  <h6 className="h5 mt-0">Jessica Stones</h6>
                  <p className="text-sm lh-160">
                    I always felt like I could do anything. That’s the main
                    thing people are controlled by! Thoughts- their perception
                    of themselves! They're slowed down.
                  </p>
                  <div className="icon-actions">
                    <a
                      className="like active"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="ni ni-like-2"></i>
                      <span className="text-muted">10 likes</span>
                    </a>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <i className="ni ni-curved-next"></i>
                      <span className="text-muted">1 share</span>
                    </a>
                  </div>
                </div>
              </Media>
            </Media>
            <Media className="align-items-center mt-5">
              <img
                alt="..."
                className="avatar avatar-lg rounded-circle mb-4"
                src={require("assets/img/faces/team-3.jpg")}
              ></img>
              <Media body>
                <Form>
                  <Input
                    placeholder="Write your comment"
                    rows="1"
                    type="textarea"
                  ></Input>
                </Form>
              </Media>
            </Media>
          </div> */}
        </CardBody>
      </Card>
    </>
  );
}

export default SocialExample2;
