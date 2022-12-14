import React from "react";

// reactstrap components
import { Button, Modal } from "reactstrap";
import ContactForm from "components/contact-us/ContactForm";

// Core Components

function ModalMessage() {
  const [modalOpen, setModalOpen] = React.useState(false);
  return (
    <>
      <Button
        className="float-right pl-3 pr-3"
        color="default"
        // href="#pablo"
        onClick={() => setModalOpen(!modalOpen)}
        // onClick={(e) => e.preventDefault()}
        size="sm"
        type="button"
      >
        <i
          className="ni ni-email-83 align-middle"
          style={{ fontSize: ".8rem", paddingBlock: "1px 1px" }}
        ></i>
        <span className="align-middle">Message</span>
      </Button>

      <Modal
        isOpen={modalOpen}
        toggle={() => setModalOpen(!modalOpen)}
        className="modal-dialog-centered"
      >
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">
          
            Message Mitch Directly
          </h5>
          <button
            aria-label="Close"
            className="close"
            onClick={() => setModalOpen(!modalOpen)}
            type="button"
          >
            <span aria-hidden={true}>×</span>
          </button>
        </div>

        <div className="modal-body bg-secondary">
          {/* <div className="text-center">
          
          <SocialLinks />
        </div> */}
          <ContactForm includeTitle={false} />
        </div>
        <div className="modal-footer bg-secondary">
          <Button
            color="secondary"
            onClick={() => setModalOpen(!modalOpen)}
            type="button"
          >
            Close
          </Button>
          {/* <Button color="primary" type="button">
            Send message
          </Button> */}
        </div>
      </Modal>
    </>
  );
}

export default ModalMessage;
