import React from "react";

// reactstrap components
import {
  Card,
  Container,
  Row,
  Col,
} from "reactstrap";

import SocialLinks from "components/feed/SocialLinks";
import ContactForm from "./ContactForm";


function ContactUs1({ autoMsg }) {

  
  return (
    <>
      <div
        id="contact-mitch"
        className="contactus-1 bg-default pt-5 pb-5"
        style={{
          backgroundImage: "url(" + require("assets/img/ill/1.svg") + ")",
        }}
      >
        <Container>
          <Row>
            <Col
              className="d-flex justify-content-center flex-column"
              lg="5"
              md="5"
            >
              <h2 className="title text-white">Get in Touch</h2>
              <h4 className="description text-white">
                You need more information? Message me here...
              </h4>
              <div className="text-lg btn-wrapper mb-4 mt-2" lg="6">
                <SocialLinks />
              </div>

              <div className="info info-horizontal">
                <div className="icon icon-shape icon-shape-primary shadow rounded-circle text-white">
                  <i className="ni ni-square-pin"></i>
                </div>
                <div className="description">
                  <h4 className="info-title text-white">Family Office</h4>
                  <p className="description ml-3 text-white">
                    Guelph Line, nr. 8,<br></br>
                    7652 Milton,<br></br>
                    On, Canada
                  </p>
                </div>
              </div>


            </Col>
            <Col className="ml-auto mr-auto" lg="7" md="7">
              <Card className="card-contact card-raised">
                
                <ContactForm autoMsg={autoMsg} includeTitle={true}/>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default ContactUs1;
