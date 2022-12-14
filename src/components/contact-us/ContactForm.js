import React from "react";
// reactstrap components
import {
  Button,
  CardHeader,
  CardBody,
  CardTitle,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
} from "reactstrap";

const ContactForm = ({autoMsg, includeTitle}) => {
  // Controls for conact form
  const alertIcon = <i className="ni ni-fat-remove mr-2"></i>;
  const [message, setMessage] = React.useState(autoMsg);
  const [formData, setFormData] = React.useState({
    errors: {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      message: "",
    },
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: message,
    spinner: false,
  });
  const [sendState, setSendState] = React.useState(false);

  // controls for the onFocus blue highlight around input box
  const [firstNameFocus, setFirstNameFocus] = React.useState("");
  const [lastNameFocus, setLastNameFocus] = React.useState("");
  const [emailFocus, setEmailFocus] = React.useState("");
  const [messageFocus, setMessageFocus] = React.useState("");
  // conditionals to decide what SEND button to display
  const isErrors = () => {
    if (formData.errors.firstName !== "") {
      setSendState(false);
    } else if (formData.errors.lastName !== "") {
      setSendState(false);
    } else if (formData.errors.email !== "") {
      setSendState(false);
    } else if (formData.errors.phone !== "") {
      setSendState(false);
    } else if (formData.errors.message !== "") {
      setSendState(false);
    } else {
      setSendState(true);
    }

    // console.log("formdata", formData);
  };

  const resetEmailForm = () => {
    setFormData({
      errors: {
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        message: "",
      },
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      message: "",
      spinner: false,
    });
  };

  const handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    // let errors = formData.errors;
    // console.log("name", name, "value", value);
    // console.log("HANDLE CHANGE", formData);
    // let errors = errors;

    if (name === "firstName") {
      setFormData((preValue) => {
        return {
          ...preValue,
          errors: {
            ...preValue["errors"],
            firstName:
              value.length <= 1
                ? "don't forget to include your first name"
                : "",
          },
        };
      });
    } else if (name === "lastName") {
      setFormData((preValue) => {
        return {
          ...preValue,
          errors: {
            ...preValue["errors"],
            lastName:
              value.length <= 1 ? "don't forget to include your last name" : "",
          },
        };
      });
    } else if (name === "email") {
      let appos = value.indexOf("@");
      let dots = value.lastIndexOf(".");
      console.log("appos", appos, "dots", dots, appos < 1, dots - appos < 2);

      if (appos < 1 || dots - appos < 2) {
        setFormData((prevValue) => {
          return {
            ...prevValue,
            errors: {
              ...prevValue["errors"],
              email: "please enter valid email",
            },
          };
        });
      } else {
        setFormData((prevValue) => {
          return {
            ...prevValue,
            errors: {
              ...prevValue["errors"],
              email: "",
            },
          };
        });
      }
    } else if (name === "message") {
      setFormData((preValue) => {
        return {
          ...preValue,
          errors: {
            ...preValue["errors"],
            message:
              value.length < 5 ? "don't forget to include your message" : "",
          },
        };
      });
    }

    isErrors();

    setFormData((preValue) => {
      return { ...preValue, [name]: value };
    });
  };
  return (
    <Form id="contact-form-1" method="post" role="form">
    { includeTitle && 
      <CardHeader className="text-center">
        <CardTitle tag="h4">Contact Mitch</CardTitle>
      </CardHeader>
    }
      <CardBody>
        <Row>
          <Col md="6">
            <FormGroup className={firstNameFocus}>
              <label>First name</label>
              <InputGroup className="mb-4">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="ni ni-circle-08"></i>
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  aria-label="First Name..."
                  placeholder="First Name..."
                  type="text"
                  onFocus={() => setFirstNameFocus("focused")}
                  onBlur={() => setFirstNameFocus("")}
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                ></Input>
              </InputGroup>
            </FormGroup>
            {formData.errors.firstName !== "" && (
              <p className="text-danger">
                {alertIcon}
                {formData.errors.firstName}
              </p>
            )}
          </Col>
          <Col className="pl-3" md="6">
            <FormGroup className={lastNameFocus}>
              <label>Last name</label>
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="ni ni-collection"></i>
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  aria-label="Last Name..."
                  placeholder="Last Name..."
                  type="text"
                  onFocus={() => setLastNameFocus("focused")}
                  onBlur={() => setLastNameFocus("")}
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                ></Input>
              </InputGroup>
            </FormGroup>
            {formData.errors.lastName !== "" && (
              <p className="text-danger">
                {alertIcon}
                {formData.errors.lastName}
              </p>
            )}
          </Col>
        </Row>
        <FormGroup className={emailFocus}>
          <label>Email address</label>
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <i className="ni ni-email-83"></i>
              </InputGroupText>
            </InputGroupAddon>
            <Input
              placeholder="Email Here..."
              type="text"
              onFocus={() => setEmailFocus("focused")}
              onBlur={() => setEmailFocus("")}
              name="email"
              value={formData.email}
              onChange={handleChange}
            ></Input>
          </InputGroup>
        </FormGroup>
        {formData.errors.email !== "" && (
          <p className="text-danger">
            {alertIcon}
            {formData.errors.email}
          </p>
        )}

        <FormGroup className={messageFocus}>
          <label>Your message</label>
          <Input
            id="contact-us-message-1"
            name="message"
            rows="6"
            type="textarea"
            onFocus={() => setMessageFocus("focused")}
            onBlur={() => setMessageFocus("")}
            value={formData.message}
            onChange={handleChange}
          ></Input>
        </FormGroup>
        {formData.errors.message !== "" && (
          <p className="text-danger">
            {alertIcon}
            {formData.errors.message}
          </p>
        )}

        <Row>
          <Col md="5">
            <div className="custom-control custom-checkbox mt-2">
              <input
                className="custom-control-input"
                id="customCheck"
                type="checkbox"
              ></input>
              <label className="custom-control-label" htmlFor="customCheck">
                <span>I'm not a robot</span>
              </label>
            </div>
          </Col>

          {/* <Col md="4 ">
                        <Button
                            className=""
                            color="primary"
                            type="submit"
                            name="submit"
                            aria-label="Clear Form"
                          >
                            Clear
                          </Button>
                      </Col> */}

          <Col md="7 text-right">
            <Button
              color="secondary"
              aria-label="clear form"
              onClick={resetEmailForm}
            >
              Clear
            </Button>

            {/* SEND button conditional logic (disabled, spinner, live btn) */}
            {formData.spinner ? (
              <Button
                className=""
                color="success"
                type="submit"
                name="submit"
                aria-label="send email"
                disabled
              >
                <span className="spinner-border spinner-border-sm"></span>{" "}
                {/* Sending... */}
              </Button>
            ) : sendState ? (
              <Button
                className=""
                color="primary"
                type="submit"
                name="submit"
                aria-label="send email"
              >
                Send
              </Button>
            ) : (
              <Button
                className=""
                color="primary"
                type="submit"
                name="submit"
                aria-label="send email"
                disabled
              >
                Send
              </Button>
            )}
          </Col>
        </Row>
      </CardBody>
    </Form>
  );
};

export default ContactForm;
