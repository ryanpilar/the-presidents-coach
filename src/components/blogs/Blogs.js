import React from "react";
import { NavLink } from 'react-router-dom';

// reactstrap components
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";
import ModalSocialCard from "../cards/ModalSocialCard";
import SocialExample from "components/feed/SocialExample";
import SocialExample2 from "components/feed/SocialExample2";


function Blogs() {
  const socialCard1 = (
    <Card className="card-blog card-background" data-animation="zooming">
      <div
        className="full-background"
        style={{
          backgroundImage:
            "url(" + require("assets/img/sections/damian.jpg") + ")",
        }}
      ></div>

      <a href="#pablo" onClick={(e) => e.preventDefault()}>
        <CardBody>
          <div className="content-bottom">
            <h6 className="card-category text-white opacity-8">
            Insta | Mo-Money
            </h6>
            <CardTitle tag="h5">On The Other Side Of Fear Is Peace.</CardTitle>
          </div>
        </CardBody>
      </a>
    </Card>
  );

  const socialCard2 = (
    <Card className="card-blog card-background" data-animation="zooming">
      <div
        className="full-background"
        style={{
          backgroundImage:
            "url(" + require("assets/img/sections/beautiful-sexy-young-girl-shorts-with-longboard-sunny-weather.jpg") + ")",
        }}
      ></div>
      <a href="#pablo" onClick={(e) => e.preventDefault()}>
        <CardBody>
          <div className="content-bottom">
            <h6 className="card-category text-white opacity-8">
              Insta | Touch on a trend
            </h6>
            <CardTitle tag="h5">New Challenges</CardTitle>
          </div>
        </CardBody>
      </a>
    </Card>
  );

  return (
    <>
      <section className="blogs-2">
        <Container fluid>
          {/* <Row className="mb-md-5">
            <Col className="mx-auto" md="8">
              <h3 className="display-3 text-center">Our recent writings</h3>
              <p className="lead text-center">
                I always felt like I could do anything. That’s the main thing
                people are controlled by! Thoughts- their perception of
                themselves! They're slowed down by their perception of
                themselves. If you're taught you can’t do anything, you won’t do
                anything. I was taught I could do everything.
              </p>
            </Col>
          </Row> */}
          <Row>
            {/* CARD #1 */}
            <Col lg="3">
              <ModalSocialCard
                socialCard={socialCard1}
                socialExample={<SocialExample instaLink={'https://www.instagram.com/p/CbafSgPAMfG/'}/>}
              ></ModalSocialCard>
            </Col>

            {/* CARD #2 */}
            <Col lg="3">
              <Card
                className="card-blog card-background"
                data-animation="zooming"
              >
                <div
                  className="full-background"
                  style={{
                    backgroundImage:
                      "url(" + require("assets/img/sections/ashim.jpg") + ")",
                  }}
                ></div>
                <NavLink to={`/media/3c9XLwzmbcNvQQcHX6WjqC`}>
                  <CardBody>
                    <div className="content-bottom">
                      <h6 className="card-category text-white opacity-8">
                      Blog | Stop messin' around!
                      </h6>
                      <CardTitle tag="h5">
                        life's soul expanding experiences.
                      </CardTitle>
                    </div>
                  </CardBody>
                  </NavLink>
              </Card>
            </Col>

            {/* CARD #3 */}
            <Col lg="3">
                <ModalSocialCard
                    socialCard={socialCard2}
                    socialExample={<SocialExample2 instaLink={'https://www.instagram.com/p/CbafSgPAMfG/'}/>}
                ></ModalSocialCard>
            </Col>

            {/* CARD #4 */}
            <Col lg="3">
              <Card
                className="card-blog card-background"
                data-animation="zooming"
              >
                <div
                  className="full-background"
                  style={{
                    backgroundImage:
                      "url(" +
                      require("assets/img/farm/horse-yelling.jpg") +
                      ")",
                  }}
                ></div>
                <NavLink to={`/media/6TxUHGT3ouyd8ItJDOwLeW`}>
                  <CardBody>
                    <div className="content-bottom">
                      <h6 className="card-category text-white opacity-8">
                        Blog | The Life I try to live
                      </h6>
                      <CardTitle tag="h5">Peace of Mind Paradise </CardTitle>
                    </div>
                  </CardBody>
                  </NavLink>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Blogs;
