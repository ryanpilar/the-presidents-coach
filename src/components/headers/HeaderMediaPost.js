import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// Core Components

function HeaderMediaPost( {mainTitle, backgroundImg, date, author, introText, iconChoice, iconColor, showIntroText} ) {


  
  return (
    <>
      <div className="page-header header-filter">

        { backgroundImg &&
          <div
            className="page-header-image"
            style={{
              backgroundImage: "url(" + backgroundImg[0].secure_url + ")",
            }}
          ></div>
        }

        <Container>
          <Row>
            <Col className="mx-auto text-center" lg="10">
              <h2 className="display-1 text-white">{mainTitle}</h2>
            </Col>
          </Row>
          <Row>
          { showIntroText && 
            <div className="floating-box bg-default">
              <div className="box text-center">
                <div className={`icon icon-shape bg-${iconColor} icon-xl rounded-circle text-white`}>
                  <i className={`ni ni-${iconChoice}`}></i>
                </div>
              </div>
              <blockquote className="blockquote text-center mt-4 ">
                {/* <p className="mb-0 text-white">{date}</p> */}
                <p className="mb-0 text-white">{date}</p>
                <div className="blockquote text-white ">
                  {author}
                  {/* <cite title="Source Title">Source Title</cite> */}
                </div>
              </blockquote>
              <h2 className="lead text-white p-5">
                {introText}
              </h2>
              
            </div>
          }
          </Row>
        </Container>
      </div>
    </>
  );
}

export default HeaderMediaPost;
