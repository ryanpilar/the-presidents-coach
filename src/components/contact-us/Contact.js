import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

import SocialLinks from "components/feed/SocialLinks";
import ContactForm from "./ContactForm";

// Core Components

function ContactUs1({ autoMsg }) {
  // // Controls for conact form
  // const alertIcon = <i className="ni ni-fat-remove mr-2"></i>;
  // const [message, setMessage] = React.useState(autoMsg);
  // const [formData, setFormData] = React.useState({
  //   errors: {
  //     firstName: "",
  //     lastName: "",
  //     phone: "",
  //     email: "",
  //     message: "",
  //   },
  //   firstName: "",
  //   lastName: "",
  //   phone: "",
  //   email: "",
  //   message: message,
  //   spinner: false,
  // });
  // const [sendState, setSendState] = React.useState(false);

  // // controls for the onFocus blue highlight around input box
  // const [firstNameFocus, setFirstNameFocus] = React.useState("");
  // const [lastNameFocus, setLastNameFocus] = React.useState("");
  // const [emailFocus, setEmailFocus] = React.useState("");
  // const [messageFocus, setMessageFocus] = React.useState("");
  // // conditionals to decide what SEND button to display
  // const isErrors = () => {
  //   if (formData.errors.firstName != "") {
  //     setSendState(false);
  //   } else if (formData.errors.lastName != "") {
  //     setSendState(false);
  //   } else if (formData.errors.email != "") {
  //     setSendState(false);
  //   } else if (formData.errors.phone != "") {
  //     setSendState(false);
  //   } else if (formData.errors.message != "") {
  //     setSendState(false);
  //   } else {
  //     setSendState(true);
  //   }

  //   // console.log("formdata", formData);
  // };

  // const resetEmailForm = () => {
  //   setFormData({
  //     errors: {
  //       firstName: "",
  //       lastName: "",
  //       phone: "",
  //       email: "",
  //       message: "",
  //     },
  //     firstName: "",
  //     lastName: "",
  //     phone: "",
  //     email: "",
  //     message: "",
  //     spinner: false,
  //   });
  // };

  // const handleChange = (event) => {
  //   let name = event.target.name;
  //   let value = event.target.value;
  //   // let errors = formData.errors;
  //   // console.log("name", name, "value", value);
  //   // console.log("HANDLE CHANGE", formData);
  //   // let errors = errors;

  //   if (name === "firstName") {
  //     setFormData((preValue) => {
  //       return {
  //         ...preValue,
  //         errors: {
  //           ...preValue["errors"],
  //           firstName:
  //             value.length <= 1
  //               ? "don't forget to include your first name"
  //               : "",
  //         },
  //       };
  //     });
  //   } else if (name === "lastName") {
  //     setFormData((preValue) => {
  //       return {
  //         ...preValue,
  //         errors: {
  //           ...preValue["errors"],
  //           lastName:
  //             value.length <= 1 ? "don't forget to include your last name" : "",
  //         },
  //       };
  //     });
  //   } else if (name === "email") {
  //     let appos = value.indexOf("@");
  //     let dots = value.lastIndexOf(".");
  //     console.log("appos", appos, "dots", dots, appos < 1, dots - appos < 2);

  //     if (appos < 1 || dots - appos < 2) {
  //       setFormData((prevValue) => {
  //         return {
  //           ...prevValue,
  //           errors: {
  //             ...prevValue["errors"],
  //             email: "please enter valid email",
  //           },
  //         };
  //       });
  //     } else {
  //       setFormData((prevValue) => {
  //         return {
  //           ...prevValue,
  //           errors: {
  //             ...prevValue["errors"],
  //             email: "",
  //           },
  //         };
  //       });
  //     }
  //   } else if (name === "message") {
  //     setFormData((preValue) => {
  //       return {
  //         ...preValue,
  //         errors: {
  //           ...preValue["errors"],
  //           message:
  //             value.length < 5 ? "don't forget to include your message" : "",
  //         },
  //       };
  //     });
  //   }

  //   isErrors();

  //   setFormData((preValue) => {
  //     return { ...preValue, [name]: value };
  //   });
  // };

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
              {/* <div className="info info-horizontal">
                <div className="icon icon-shape icon-shape-primary shadow rounded-circle text-white">
                  <i className="ni ni-mobile-button"></i>
                </div>
                <div className="description">
                  <h4 className="info-title text-white">My Socials</h4>
                </div>
              </div> */}
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
