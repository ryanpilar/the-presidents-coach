import React from "react";
import { UncontrolledTooltip } from "reactstrap";
import Toasts from "components/index-page/Toasts";
import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from "react-share";

const SocialLinksMediaPost = ({ id, showToast, facebookHashtag, facebookQuote, twitterTitle, twitterHashtag, linkedinTitle, linkedinSummary, emailSubject }) => {
  const [toastBoolean, setToastBoolean] = React.useState(false)

  const blogRoute = `http://the-presidents-coach.netlify.app/media/${id}`;

  const toggleToast = () => {
    setToastBoolean( preValue => !preValue)
  }

  const closeToast = () => {
    setToastBoolean(false)
  }

  const openToast = () => {
    setToastBoolean(true)
  }

  const runToast = async () => {
    await openToast()
    await setTimeout(() =>  closeToast(), 3500)
    
  }



  return (
    <div className="text-default pr-1">
      <FacebookShareButton
        className="pl-4"
        hashtag={`#${facebookHashtag}`}
        quote={`Read Mitch's Post: '${facebookQuote}'`}
        url={blogRoute}
        aria-label="Share to Facebook"
        id="tooltip5226408871339"
      >

        <a className="fab fa-facebook" aria-label="Share to Facebook" />

        <UncontrolledTooltip delay={0} target="tooltip5226408871339">
          Facebook
        </UncontrolledTooltip>
      </FacebookShareButton>

      <TwitterShareButton
        className="pl-4"
        title={`Mitch's Media 🔥 | '${twitterTitle}'`}
        hashtags={[`${twitterHashtag}`]}
        url={blogRoute}
        aria-label="Share to Twitter"
        id="tooltip52264081339"
      >
        <a className="fab fa-twitter" aria-label="Share to Twitter" />

        <UncontrolledTooltip delay={0} target="tooltip52264081339">
          Twitter
        </UncontrolledTooltip>
      </TwitterShareButton>

      <LinkedinShareButton
        className="pl-4"
        title={linkedinTitle}
        summary={linkedinSummary}
        source={blogRoute}
        url={blogRoute}
        id="tooltip56408133999"
      >
        <a className="fab fa-linkedin" aria-label="Share to LinkedIn" />


        <UncontrolledTooltip delay={0} target="tooltip56408133999">
          Linked In
        </UncontrolledTooltip>
      </LinkedinShareButton>


      <EmailShareButton
        className="pl-4"
        subject={`Read Mitch's post: ${emailSubject}`}
        body="Link to article: "
        url={blogRoute}
        id={"tooltip84449743555"}
      >
        <a className="fa fa-envelope" aria-label="Share to Email" />
      </EmailShareButton>
      <UncontrolledTooltip delay={0} target="tooltip84449743555">
        Email
      </UncontrolledTooltip>

      <a
        className="fa fa-link pl-4"
        style={{ cursor: "pointer" }}
        onClick={ (event) => {
          navigator.clipboard.writeText(blogRoute)
          runToast()
        }}

        aria-label="Copy Link Address"
        id="tooltip56408132739"
      />
      <UncontrolledTooltip delay={0} target="tooltip56408132739">
        Copy Link
      </UncontrolledTooltip>

      { toastBoolean && 
        // "",
        // "default"
        // "primary"
        // "secondary",
        // "info",
        // "success",
        // "danger",
        // "warning",

        <Toasts runToast={runToast} toastColor={''} closeToast={closeToast} />
      }
    </div>
  );
};

export default SocialLinksMediaPost;

 
