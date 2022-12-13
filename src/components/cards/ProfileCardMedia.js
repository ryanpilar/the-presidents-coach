import React from "react";

// reactstrap components
import { Button, Card, Row, Col } from "reactstrap";

import ModalCoontactForm from "components/modals/ModalContactForm";

import { createClient } from "contentful";

function ProfileCardMedia() {

  const [instagramStats, setInstagramStats] = React.useState(null)
  // Contentful Connect
  const client = createClient({
    space: process.env.REACT_APP_CONTENTFUL_SPACE,
    accessToken: process.env.REACT_APP_CONTENTFUL_TOKEN,
  });
  React.useEffect(() => {
    const getAllEntries = async () => {
      // contentful get data
      try {
        await client
          .getEntries({ content_type: "instagramStats" })
          .then((allEntries) => {
            
            // console.log('updated', updated)
            setInstagramStats(allEntries.items[0].fields);
          });
      } catch (error) {
        console.log(
          "this error arose from the client.getEntries() call to contentful"
        );
      }
    };
  
    getAllEntries();
  }, []);

  return (
    <>
      <Card className="card-profile shadow mt--300">
        <div className="px-4">
          <Row className="justify-content-center">
            <Col className="order-lg-2" lg="3">
              <div className="card-profile-image">
                <div className="oreo-filling">
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img
                      alt="..."
                      className="rounded-circle"
                      src={require("assets/img/faces/mitch-mugshot.png")}
                    />
                  </a>
                </div>
              </div>
            </Col>
            <Col
              className="order-lg-3 text-lg-right align-self-lg-center"
              lg="4"
            >
              <div className="card-profile-actions py-4 mt-lg-0">
                <Button
                  className="mr-4"
                  color="info"
                  href="https://www.instagram.com/thepresidentscoach/"
                  // onClick={(e) => e.preventDefault()}
                  size="sm"
                  //   style={{paddingBlock:'auto auto'}}
                >
                  <i
                    className="fab fa-instagram align-middle"
                    style={{ fontSize: "1rem", paddingBlock: "1px 1px" }}
                  ></i>
                  <span className="align-middle">Follow</span>
                </Button>


                <ModalCoontactForm />



              </div>
            </Col>
            <Col className="order-lg-1" lg="4">
              <div className="card-profile-stats d-flex justify-content-center">
                {/* <div className='d-flex align-items-center'>
                    <i class="fab fa-instagram" style={{fontSize: '3rem'}}></i>
                    
                </div> */}
                <div>
                  <span className="heading">
                  { instagramStats && 
                    instagramStats.friends
                  }
                  
                  </span>
                  <span className="description">
                  Friends</span>
                </div>
                <div>
                  <span className="heading">
                  { instagramStats && 
                    instagramStats.posts
                  }
                  
                  </span>
                  <span className="description">Posts</span>
                </div>
                <div>
                  <span className="heading">
                  { instagramStats && 
                    instagramStats.following
                  }
                  
                  </span>
                  <span className="description">Following</span>
                </div>
              </div>
            </Col>
          </Row>

          <div className="mt-5 py-5 border-top text-center">
            <Row className="justify-content-center">
              <Col lg="9">
                <h1>Mitch's Media</h1>
                <p>
                  Here you will get a taste of what it is like to follow{" "}
                  <strong>The President's Coach</strong>.
                </p>
                <p>
                  I invite you to <strong>laugh</strong> with me! And I want to
                  challenge you to learn something new. to and most importantly,
                  learn something about yourself. An artist of considerable
                  range, — the name taken by Melbourne-raised, Brooklyn-based
                  Nick Murphy — writes, performs and records all of his own
                  music, giving it a warm, intimate feel with a solid groove
                  structure. An artist of considerable range.
                </p>
              </Col>
            </Row>
          </div>
        </div>
      </Card>
    </>
  );
}

export default ProfileCardMedia;
