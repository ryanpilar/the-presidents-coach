import React from "react";
import { NavLink } from "react-router-dom";

// reactstrap components
import { Button, Card, Row, Col } from "reactstrap";

// Core Components

function ProfileCardError() {
  return (
    <>
      <Card className="card-profile shadow mt--300">
        <div className="px-4">
        
          <div className="py-5 text-center">
            <Row className="justify-content-center">
              <Col lg="9">
                <h1>404 Error</h1>
                <h5>Oops! You seem to be lost. Try these helpful links:</h5>
                <p>
                    <NavLink className='p-2' to={`/`}>
                        Home
                    </NavLink>
                    |
                    <NavLink className='p-2' to={`/coaching`}>
                        Coaching
                    </NavLink>
                    |
                    <NavLink className='p-2' to={`/media`}>
                        Mitch's Media
                    </NavLink>
                    |
                    <NavLink className='p-2' to={`/#contact-mitch`}>
                        Contact
                    </NavLink>
                    
                </p>
                
                
               
              </Col>
            </Row>
          </div>
        </div>
      </Card>
    </>
  );
}

export default ProfileCardError;
