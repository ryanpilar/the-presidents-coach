import React from "react";

// reactstrap components
import { Toast, ToastBody } from "reactstrap";

// Core Components
const prop = "primary"
const colors = [
  // "",
  "default"
  // "primary"
  // "secondary",
  // "info",
  // "success",
  // "danger",
  // "warning",
];

function Toasts( { toastColor, closeToast }) {
  return (
    <>
      {/* <Row className="justify-content-center">

            <Col lg="5" md="6" className="mb-3"> */}

            <div aria-live="polite" aria-atomic="true">
        <div style={{ position: "fixed", bottom: '4rem', right: '2rem', zIndex: 9999, float: "right" }}>
              <Toast className={"bg-" + toastColor}>
                <div
                  className={
                    "toast-header" +
                    (toastColor !== "" && toastColor !== "secondary" ? " text-white" : "")
                  }
                >
                  {/* <img
                    alt="..."
                    className="rounded mr-2"
                    src={require("assets/img/tim.png")}
                  ></img> */}
                  <i className="ni ni-notification-70 pr-2"></i>
                  <strong className="mr-auto ">Clipboard Message</strong>{" "}
                  <button
                    type="button"
                    className="ml-2 close"
                    data-dismiss="toast"
                    aria-label="Close"
                    onClick={ () => closeToast()}
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <ToastBody
                  className={
                    toastColor !== "" && toastColor !== "secondary" ? "text-white" : ""
                  }
                >
                  Hooray! You just copied a link to your clipboard!
                </ToastBody>
              </Toast>

              </div></div>
            {/* </Col> */}
          {/* ); */}
        {/* })} */}
      {/* </Row> */}
    </>
  );
}

export default Toasts;
