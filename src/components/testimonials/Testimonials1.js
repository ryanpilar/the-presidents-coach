import React from "react";

// reactstrap components
import {
  CardTitle,
  Container,
  Row,
  Col,
  Carousel,
  CarouselItem,
} from "reactstrap";

function Testimonials1({
  testimonialImg,
  testimonialImg2,
  testimonialImg3,
  testimonialImg4,
}) {
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

  // Core Components
  const items = [
    {
      content: (
        <Container>
          <Row>
            <Col className="ml-auto" md="5">
              <CardTitle tag="h3">Sarah Smith</CardTitle>
              <h3 className="text-danger">• • •</h3>
              <h4 className="lead">
                Take up one idea. Make that one idea your life - think of it,
                dream of it, live on that idea. Let the brain, muscles, nerves,
                every part of your body, be full of that idea, and just leave
                every other idea alone. This is the way to success. A single
                rose can be my garden... a single friend, my world.
              </h4>
              {/* <Button
              className="mt-3"
              color="danger"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              Read more
            </Button> */}
            </Col>
            <Col className="p-5 ml-auto" md="5">
              <div className="p-3">
                <img
                  alt="..."
                  className="img-fluid rounded shadow transform-perspective-right"
                  src={testimonialImg}
                ></img>
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
            <Col className="ml-auto" md="5">
              <CardTitle tag="h3">Isaac Hunter</CardTitle>
              <h3 className="text-info">• • •</h3>
              <h4 className="lead">
                Take up one idea. Make that one idea your life - think of it,
                dream of it, live on that idea. Let the brain, muscles, nerves,
                every part of your body, be full of that idea, and just leave
                every other idea alone. This is the way to success. A single
                rose can be my garden... a single friend, my world.
              </h4>
              {/* <Button
              className="mt-3"
              color="info"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              Read more
            </Button> */}
            </Col>
            <Col className="p-5 ml-auto" md="5">
              <div className="p-3">
                <img
                  alt="..."
                  className="img-fluid rounded shadow transform-perspective-right"
                  src={testimonialImg2}
                ></img>
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
            <Col className="ml-auto" md="5">
              <CardTitle tag="h3">Isaac Hunter</CardTitle>
              <h3 className="text-info">• • •</h3>
              <h4 className="lead">
                Take up one idea. Make that one idea your life - think of it,
                dream of it, live on that idea. Let the brain, muscles, nerves,
                every part of your body, be full of that idea, and just leave
                every other idea alone. This is the way to success. A single
                rose can be my garden... a single friend, my world.
              </h4>
              {/* <Button
              className="mt-3"
              color="info"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              Read more
            </Button> */}
            </Col>
            <Col className="p-5 ml-auto" md="5">
              <div className="p-3">
                <img
                  alt="..."
                  className="img-fluid rounded shadow transform-perspective-right"
                  src={testimonialImg3}
                ></img>
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
            <Col className="ml-auto" md="5">
              <CardTitle tag="h3">Isaac Hunter</CardTitle>
              <h3 className="text-info">• • •</h3>
              <h4 className="lead">
                Take up one idea. Make that one idea your life - think of it,
                dream of it, live on that idea. Let the brain, muscles, nerves,
                every part of your body, be full of that idea, and just leave
                every other idea alone. This is the way to success. A single
                rose can be my garden... a single friend, my world.
              </h4>
              {/* <Button
              className="mt-3"
              color="info"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              Read more
            </Button> */}
            </Col>
            <Col className="p-5 ml-auto" md="5">
              <div className="p-3">
                <img
                  alt="..."
                  className="img-fluid rounded shadow transform-perspective-right"
                  src={testimonialImg4}
                ></img>
              </div>
            </Col>
          </Row>
        </Container>
      ),
      src: "1",
      altText: "",
      caption: "",
    },
  ];
  return (
    <>
      <div
        className=""
        style={{
          ninHeight: "1000px !important",
          backgroundImage:
            "url(" + require("assets/img/ill/testimonial_bg.svg") + ")",
        }}
      >
        <Container>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="8">
              <h2 className="title">What Clients Say</h2>
            </Col>
          </Row>

          <Carousel
            activeIndex={activeIndex}
            next={next}
            previous={previous}
            className="carousel-team"
            id="carousel-testimonials"
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
        </Container>
      </div>
    </>
  );
}

export default Testimonials1;
