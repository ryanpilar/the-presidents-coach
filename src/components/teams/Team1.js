import React from "react";

// reactstrap components
import {
  Badge,
  Button,
  CardTitle,
  Container,
  Row,
  Col,
  Carousel,
  CarouselItem,
} from "reactstrap";

// Core Components

const items = [
  {
    content: (
      <Container>
        <Row>
          <Col className="p-5" md="5">
            <div className="p-4">
              <img
                alt="..."
                className="rounded shadow transform-perspective-left"
                src={require("assets/img/ill/mitch-field-crop.png")}
              ></img>
            </div>
          </Col>
          <Col md="7">
            <div className="wrapper p-md-0">
              <CardTitle className="display-3" tag="h3">
                What Is It That You Want?
              </CardTitle>
              <div className="lead">

              <ul className="list-unstyled mb-0">
                <li className="py-1">
                  <div className="d-flex align-items-center">
                    <div>
                      <i className="ni ni-check-bold mr-3 text-success"></i>
                      {/* <i className="ni ni-bulb-61 mr-3 text-primary"></i> */}
                      
                    </div>
                    <div>
                      <p className="mb-1">To expand your business</p>
                    </div>
                  </div>
                </li>
                <li className="py-1">
                  <div className="d-flex align-items-center">
                    <div>
                      <i className="ni ni-check-bold mr-3 text-success"></i>
                      {/* <i className="ni ni-bulb-61 mr-3 text-primary"></i> */}
                      {/* <Badge className="badge-circle mr-3" color="info">
                        <i className="ni ni-bulb-61"></i>
                      </Badge> */}
                    </div>
                    <div>
                      <p className="mb-1">To reconcile with family</p>
                    </div>
                  </div>
                </li>
                <li className="py-1">
                  <div className="d-flex align-items-center">
                    <div>
                      <i className="ni ni-check-bold mr-3 text-success"></i>
                      {/* <i className="ni ni-bulb-61 mr-3 text-primary"></i> */}
                    </div>
                    <div>
                      <p className="mb-1">To sleep better</p>
                    </div>
                  </div>
                </li>
                <li className="py-1">
                  <div className="d-flex align-items-center">
                    <div>
                      <i className="ni ni-check-bold mr-3 text-success"></i>
                      {/* <i className="ni ni-bulb-61 mr-3 text-primary"></i> */}
                    </div>
                    <div>
                      <p className="mb-1">To be able to spend a Sunday anxiety free...</p>
                    </div>
                  </div>
                </li>
                <li className="py-1">
                  <div className="d-flex align-items-center">
                    <div>
                      <i className="ni ni-favourite-28 mr-3 text-danger"></i>
                      
                    </div>
                    <div>
                      <p className="mb-0">The highest level of leadership begins with the acceptance that you are the beacon for what you want</p>
                    </div>
                  </div>
                </li>
                
              </ul>
              

              </div>
              
              {/* <div className="footer text-left">
                <Button
                  className="rounded-circle"
                  color="twitter"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  size="sm"
                >
                  <i className="fab fa-twitter"></i>
                </Button>
                <Button
                  className="rounded-circle"
                  color="facebook"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  size="sm"
                >
                  <i className="fab fa-facebook-square"></i>
                </Button>
                <Button
                  className="rounded-circle"
                  color="dribbble"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  size="sm"
                >
                  <i className="fab fa-dribbble"></i>
                </Button>
              </div> */}
            </div>
          </Col>
        </Row>
      </Container>
    ),
    src: "0",
    altText: "",
    caption: "",
  },
  {
    content: (
      <Container>
        <Row>
          <Col className="p-5" md="5">
            <div className="p-4">
              <img
                alt="..."
                className="rounded shadow transform-perspective-left"
                src={require("assets/img/farm/mitch-horse-2.png")}
              ></img>
            </div>
          </Col>
          <Col md="7">
            <div className="wrapper p-md-0">
              <CardTitle tag="h1">'Just Be'</CardTitle>
              <div className="lead">
                <p>
                  <strong>
                    To move beyond what you think is possible, you must stop
                    thinking. Just Be.
                  </strong>
                </p>

                <p>You are good enough.</p>

                <p>You are safe.</p>

                <p>You are guided.</p>

                <p>You have what you need.</p>

                <p>Exhale and sink into the divine expansion of BEING you.</p>

                <p>❤️ ❤️ ❤️</p>
              </div>
              {/* <ul className="list-unstyled mb-0">
                <li className="py-1">
                  <div className="d-flex align-items-center">
                    <div>
                      <Badge className="badge-circle mr-3" color="info">
                        <i className="ni ni-atom"></i>
                      </Badge>
                    </div>
                    <div>
                      <p className="mb-1">Dedicated entrepreneur</p>
                    </div>
                  </div>
                </li>
                <li className="py-1">
                  <div className="d-flex align-items-center">
                    <div>
                      <Badge className="badge-circle mr-3" color="success">
                        <i className="ni ni-user-run"></i>
                      </Badge>
                    </div>
                    <div>
                      <p className="mb-1">Urban exploration</p>
                    </div>
                  </div>
                </li>
              </ul> */}
              {/* <div className="footer text-left">
                <Button
                  className="rounded-circle"
                  color="twitter"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  size="sm"
                >
                  <i className="fab fa-twitter"></i>
                </Button>
                <Button
                  className="rounded-circle"
                  color="facebook"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  size="sm"
                >
                  <i className="fab fa-facebook-square"></i>
                </Button>
                <Button
                  className="rounded-circle"
                  color="dribbble"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  size="sm"
                >
                  <i className="fab fa-dribbble"></i>
                </Button>
              </div> */}
            </div>
          </Col>
        </Row>
      </Container>
    ),
    src: "1",
    altText: "",
    caption: "",
  },
  {
    content: (
      <Container>
        <Row>
          <Col className="p-5" md="5">
            <div className="p-4">
              <img
                alt="..."
                className="rounded shadow transform-perspective-left"
                src={require("assets/img/ill/mitch-concert-singing.jpg")}
              ></img>
            </div>
          </Col>
          <Col md="7">
            <div className="wrapper p-md-0">
              <CardTitle tag="h1">You are a Goddamn Star</CardTitle>
              <div className="lead">
                {/* <p><span className='mr-2'>⭐</span> My clients are featured in major publications.</p>

                <p><span className='mr-2'>⭐</span> My clients become the presidents of their companies.</p>

                <p><span className='mr-2'>⭐</span> My clients get promoted.</p>

                <p><span className='mr-2'>⭐</span> My clients leave jobs they hate for jobs they love.</p>

                <p><span className='mr-2'>⭐</span> My clients come off their meds.</p>

                <p><span className='mr-2'>⭐</span> My clients sleep at night.</p> */}

                {/* <p> My clients are featured in major publications.</p>

                <p> My clients become the presidents of their companies.</p>

                <p> My clients get promoted.</p>

                <p> My clients leave jobs they hate for jobs they love.</p>

                <p> My clients come off their meds.</p>

                <p> My clients sleep at night.</p> */}

                <ul className="list-unstyled mb-0">
                {/* <li className="py-1">
                  <div className="d-flex align-items-center">
                    <div>
                      <i className="ni ni-check-bold mr-3 text-success"></i>
                      
                    </div>
                    <div>
                      <p className="mb-1">My clients are featured in major publications</p>
                    </div>
                  </div>
                </li> */}
                <li className="py-1">
                  <div className="d-flex align-items-center">
                    <div>
                      <i className="ni ni-check-bold mr-3 text-success"></i>
                      {/* <i className="ni ni-bulb-61 mr-3 text-primary"></i> */}
                      {/* <Badge className="badge-circle mr-3" color="info">
                        <i className="ni ni-bulb-61"></i>
                      </Badge> */}
                    </div>
                    <div>
                      <p className="mb-1">My clients become the presidents of their companies</p>
                    </div>
                  </div>
                </li>
                {/* <li className="py-1">
                  <div className="d-flex align-items-center">
                    <div>
                      <i className="ni ni-check-bold mr-3 text-success"></i>
                    </div>
                    <div>
                      <p className="mb-1">My clients get promoted</p>
                    </div>
                  </div>
                </li> */}
                <li className="py-1">
                  <div className="d-flex align-items-center">
                    <div>
                      <i className="ni ni-check-bold mr-3 text-success"></i>
                      {/* <i className="ni ni-bulb-61 mr-3 text-primary"></i> */}
                    </div>
                    <div>
                      <p className="mb-1">My clients leave jobs they hate for jobs they love</p>
                    </div>
                  </div>
                </li>
                <li className="py-1">
                  <div className="d-flex align-items-center">
                    <div>
                      
                      <i className="ni ni-check-bold mr-3 text-success"></i>
                      
                    </div>
                    <div>
                      <p className="mb-1">My clients come off their meds</p>
                    </div>
                  </div>
                </li>
                <li className="py-1">
                  <div className="d-flex align-items-center">
                    <div>
                      <i className="ni ni-check-bold mr-3 text-success"></i>
                      
                      
                    </div>
                    <div>
                      <p className="mb-1">My clients sleep at night</p>
                    </div>
                  </div>
                </li>
                <li className="py-1">
                  <div className="d-flex align-items-center">
                    <div>
                      <i className="ni ni-favourite-28 mr-3 text-danger"></i>
                      
                      
                    </div>
                    <div>
                      <p className="mb-1">Stop messin' around in that big beautiful brain of yours and get to life's soul expanding experiences. Because that's what you're here for!</p>
                    </div>
                  </div>
                </li>
                
              </ul>

              </div>
            </div>
          </Col>
        </Row>
      </Container>
    ),
    src: "2",
    altText: "",
    caption: "",
  },
  {
    content: (
      <Container>
        <Row>
          <Col className="p-5" md="5">
            <div className="p-4">
              <img
                alt="..."
                className="rounded shadow transform-perspective-left"
                src={require("assets/img/farm/horse-head-tilt.png")}
              ></img>
            </div>
          </Col>
          <Col md="7">
            <div className="wrapper p-md-0">
              <CardTitle tag="h1">Conflict Is The Opposite of Peace</CardTitle>
              <div className="lead">
                <p>When you fight your life, conflict becomes home.</p>

                <p>
                  When we stop assigning meaning and start accepting that, love
                  & anger, time & timelessness, feeling unseen & hidden, can all be a part
                  of the same experience… Then there is nothing to push against.
                </p>
                <p>
                  <strong> And then we become the landing pad for peace.</strong>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    ),
    src: "2",
    altText: "",
    caption: "",
  },
  
];

function Team1() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };
  return (
    <>
      <section className="team-1">
        <Container>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="8">
              <h3 className="display-3">Mitchell the Executive Coach</h3>
              <p className="lead">
                My job is to remove your mental clutter. Remove that doubt and
                that anxiety. I teach you how, and I don't let you forget your
                why.
              </p>
            </Col>
          </Row>
          <Row>
            <Carousel
              activeIndex={activeIndex}
              next={next}
              previous={previous}
              interval={10000}
              className="carousel-team"
              id="carouselExampleControls"
            >
              {items.map((item, key) => {
                return (
                  <CarouselItem
                    onExiting={() => setAnimating(true)}
                    onExited={() => setAnimating(false)}
                    key={key}
                  >
                    {item.content}
                  </CarouselItem>
                );
              })}
              <a
                className="carousel-control-prev"
                data-slide="prev"
                href="#pablo"
                onClick={(e) => {
                  e.preventDefault();
                  previous();
                }}
                role="button"
              >
                <i className="ni ni-bold-left"></i>
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                data-slide="next"
                href="#pablo"
                onClick={(e) => {
                  e.preventDefault();
                  next();
                }}
                role="button"
              >
                <i className="ni ni-bold-right"></i>
                <span className="sr-only">Next</span>
              </a>
            </Carousel>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Team1;
