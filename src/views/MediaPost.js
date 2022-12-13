import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// Core Components
import DemoFooter from "components/footers/DemoFooter.js";
import HeaderMediaPost from "components/headers/HeaderMediaPost.js";
import NavBarMain from "components/navbars/NavBarMain.js";

import { createClient } from "contentful";
import { NavLink, useParams } from "react-router-dom"; // useParams allows the '/post/:id' to work

// import { EmailShareButton, FacebookShareButton, LinkedinShareButton, TwitterShareButton } from "react-share";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { MARKS, BLOCKS } from "@contentful/rich-text-types";
import MediaPostCarousel from "./MediaPostCarousel";
import Badge from "reactstrap/lib/Badge";
import SEO from "components/seo/SEO";

import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from "react-share";
import SocialLinksMediaPost from "components/feed/SocialLinksMediaPost";

function MediaPost() {
  const { id } = useParams(); // grabs the contentful :id form the address bar
  const [mediaPost, setMediaPost] = React.useState([]);
  const [imageCarousel, setImageCarousel] = React.useState();
  const [listNodes, setListNodes] = React.useState(null);

  const client = createClient({
    space: process.env.REACT_APP_CONTENTFUL_SPACE,
    accessToken: process.env.REACT_APP_CONTENTFUL_TOKEN,
  });

  // Converts incoming Contentful data into React components
  const richTextConversion = (text) => {
    if (text) {
      // console.log('MEDIA MEDIA', mediaPost, )
      const contentfulOptions = {
        renderMark: {
          [MARKS.CODE]: (embedded) => (
            <span className="youtube-wrapper">
              <span className="realtive-parent">
                <span dangerouslySetInnerHTML={{ __html: embedded }} />
              </span>
            </span>
          ),
        },

        renderNode: {
          "embedded-asset-block": (node) => (
            <img width={`100%`} src={node.data.target.fields.file.url} />
          ),
          [BLOCKS.QUOTE]: (node, children) => (
            <div className="p-4">
              <blockquote className="blockquote">
                <p className="m-4">
                  <i className="fa fa-quote-right text-primary"></i>
                  {children}
                </p>
              </blockquote>
            </div>
          ),
          [BLOCKS.TABLE]: (node, children) => (
            <table className="table table-bordered ">
              <tbody className=" ">{children}</tbody>
            </table>
          ),
          [BLOCKS.TABLE_ROW]: (node, children) => (
            <tr className="thead-dark">{children}</tr>
          ),
          [BLOCKS.TABLE_CELL]: (node, children) => (
            <td className="">{children}</td>
          ),
          [BLOCKS.TABLE_HEADER_CELL]: (node, children) => (
            <th className="">
              <h3 className="display-2 text-primary h3">{children}</h3>
            </th>
          ),
        },
      };
      return documentToReactComponents(text, contentfulOptions);
    } else {
      console.log("NO CONTENT PRESENT");
    }
  };

  React.useEffect(() => {
    const getEntryById = async () => {
      try {
        // const idTest = "3c9XLwzmbcNvQQcHX6WjqC";

        await client.getEntry(id).then((mediaEntry) => {
          setMediaPost(mediaEntry.fields);
          setImageCarousel(mediaEntry.fields.imgCarousel);
        });
      } catch (error) {
        console.log("error");
      }
    };

    getEntryById();
  }, []);

  return (
    <>
      {mediaPost && (
        <SEO
          title={`The President's Coach | Post | ${mediaPost.title}`}
          description={mediaPost.metaDescription}
        />
      )}

      <NavBarMain type="primary" />

      <div className="wrapper">
        {mediaPost && (
          <HeaderMediaPost
            mainTitle={mediaPost.mainTitle}
            backgroundImg={mediaPost.backgroundImg}
            date={mediaPost.date}
            author={mediaPost.author}
            introText={mediaPost.introText}
            iconChoice={mediaPost.iconChoice}
            iconColor={mediaPost.iconColor}
            showIntroText={mediaPost.showIntroText}
          />
        )}
{/* <Container>
<Row>
              <Col className="mx-auto" md="8">Home / Media / {id}</Col>
            </Row>
</Container> */}
        <section className="section mb-0 pb-0">
          <Container>
            

            <Row>
              <Col className="mx-auto" md="8">
                {!mediaPost.showIntroText && (
                  <Row>
                    <Col md="6"></Col>
                    <Col md="6">
                      <div className="text-right mb-4">
                        <div>
                          <Badge pill color="secondary" className="badge-lg">
                            {mediaPost.date}
                          </Badge>{" "}
                          {/* <Badge pill color="secondary">{mediaPost.author}</Badge>{" "} */}
                        </div>
                        <div>
                          <span className="h6 text-light">by </span>{" "}
                          <span className="h6 text-light">
                            {mediaPost.author}
                          </span>
                          {/* <Badge pill color="secondary">{mediaPost.date}</Badge>{" "} */}
                          {/* <Badge pill color="primary">{mediaPost.author}</Badge>{" "} */}
                        </div>
                      </div>
                    </Col>
                  </Row>
                )}

                {mediaPost.bodyTextStart &&
                  richTextConversion(mediaPost.bodyTextStart)}
              </Col>
              {/* <Col className="mx-auto text-right" md="8">
                <Badge pill color="secondary" className="badge-lg mb-2">
                  Share This Post<i className="fa fa-arrow-down pl-1"></i>
                </Badge>{" "}
                <SocialLinksMediaPost
                  id={id}
                  className="border-bottom"
                  facebookHashtag={"thepresidentscoach"}
                  facebookQuote={mediaPost.metaDescription}
                  twitterTitle={mediaPost.title}
                  twitterHashtag={"thepresidentscoach"}
                  linkedinTitle={mediaPost.title}
                  linkedinSummary={mediaPost.metaDescription}
                  emailSubject={mediaPost.title}
                />
              </Col> */}
            </Row>
          </Container>
        </section>

        <section>
          {mediaPost.showImgCarousel && imageCarousel && (
            <Row>
              <Col>
                <MediaPostCarousel imageCarousel={imageCarousel} />
              </Col>
            </Row>
          )}
        </section>

        <section className="section mt-0  pt-0">
          <Container>
            <Row>
              <Col className="mx-auto" md="8">
                {mediaPost.bodyTextEnd && (
                  <>
                    {richTextConversion(mediaPost.bodyTextEnd)}
                    {/* {console.log(mediaPost.bodyTextEnd)} */}
                  </>
                )}
              </Col>
              <Col className="mx-auto text-right mt-0" md="8">
                <Badge pill color="secondary" className="badge-lg mb-2">
                  Share This Post<i className="fa fa-arrow-down pl-1"></i>
                </Badge>{" "}
                <SocialLinksMediaPost
                  id={id}
                  className="border-bottom"
                  facebookHashtag={"thepresidentscoach"}
                  facebookQuote={mediaPost.metaDescription}
                  twitterTitle={mediaPost.title}
                  twitterHashtag={"thepresidentscoach"}
                  linkedinTitle={mediaPost.title}
                  linkedinSummary={mediaPost.metaDescription}
                  emailSubject={mediaPost.title}
                />
                {/* <h3 className="border-bottom mt-5"></h3> */}
              </Col>
            </Row>
          </Container>
        </section>

        {/* <section className="section pt-0 mt-0">
        <Container >
            <Row>
              <Col className="mx-auto" md="8">
                <SocialLinksMediaPost />
              </Col>
            </Row>
          </Container>
        </section> */}

        <DemoFooter />
      </div>
    </>
  );
}

export default MediaPost;
