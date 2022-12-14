import React from "react";

// reactstrap components
import {
  Card,
  CardBody,
  CardTitle,
  Container,
  Row,
  Col,
} from "reactstrap";

import { NavLink } from 'react-router-dom'

import { createClient } from "contentful";

function Blogs1() {
  // const [mediaList, setMediaList] = React.useState([]);
  const [correctSize, setCorrectSize] = React.useState(null);
  

  // Contentful Connect
  const client = createClient({
    space: process.env.REACT_APP_CONTENTFUL_SPACE,
    accessToken: process.env.REACT_APP_CONTENTFUL_TOKEN,
  });

  // algo that makes image cards sm-sm-lg-lg-sm-sm-lg-lg...
  function updateDisplaySizes(content) {
    let counter = 2;
    let isSmall = true;
    let cardSizes = {
      small: 3,
      large: 6,
    };

    const updated = content.map((item, index) => {
      if (counter === 0) {
        isSmall = !isSmall;
        counter = 2;
      }

      if (isSmall) {
        counter--;

        return {
          itemData: item,
          size: cardSizes.small,
        };
      } else {
        counter--;

        return {
          itemData: item,
          size: cardSizes.large,
        };
      }
    });

    return updated;
  }

  const sortByDate = (contentfulEntries) => {
    return contentfulEntries.sort(
      (a, b) => new Date(b.fields.date) - new Date(a.fields.date)
    );
  };

  React.useEffect(() => {
    const getAllEntries = async () => {
      // contentful get data
      try {
        await client
          .getEntries({ content_type: "mediaPost" })
          .then((allEntries) => {
            const sortedEntries = sortByDate(allEntries.items);
            const updated = updateDisplaySizes(sortedEntries);
            // console.log('updated', updated)
            setCorrectSize(updated);
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
      {correctSize && (
        <section className="blogs-1">
          <Container>
            <Row className="mb-5">
              <Col md="8">
                <h3 className="display-3">Mitch's Recent Writings</h3>
                <p className="lead mt-1">
                  Whatever the desire in your heart. Business, romantic,
                  personal, spiritual… remain steadfast.
                </p>
              </Col>
            </Row>

            <Row className="align-items-center">
              {correctSize.map((mediaPost, index) => {

                return (
                  <Col key={index} lg={mediaPost.size}>
                    <Card
                      className="card-blog card-background"
                      data-animation="zooming"
                    >
                      <div
                        className="full-background"
                        style={{
                          backgroundImage:
                            "url(" +
                            mediaPost.itemData.fields.backgroundImg[0]
                              .secure_url +
                            ")",
                        }}
                      ></div>
                      <NavLink to={`/media/${mediaPost.itemData.sys.id}`}>
                      <CardBody>
                          <div className="content-bottom">
                            <h6 className="card-category text-white opacity-8">
                              {mediaPost.itemData.fields.date}
                            </h6>
                            <CardTitle tag="h5">
                              {mediaPost.itemData.fields.title}
                            </CardTitle>
                          </div>
                        </CardBody>

                      </NavLink>
                      {/* <a href={`/media/${mediaPost.itemData.sys.id}`}>
                        <CardBody>
                          <div className="content-bottom">
                            <h6 className="card-category text-white opacity-8">
                              {mediaPost.itemData.fields.date}
                            </h6>
                            <CardTitle tag="h5">
                              {mediaPost.itemData.fields.title}
                            </CardTitle>
                          </div>
                        </CardBody>
                      </a> */}
                    </Card>
                  </Col>
                );
              })}
            </Row>
          </Container>
        </section>
      )}
    </>
  );
}

export default Blogs1;
