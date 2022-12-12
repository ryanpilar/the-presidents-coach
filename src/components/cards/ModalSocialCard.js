
import React from "react";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Modal,
  Row,
  Col
} from "reactstrap";

import SocialExample from "components/feed/SocialExample";

class ModalSocialCard extends React.Component {

  state = {
    exampleModal: false
  };
  toggleModal = state => {
    this.setState({
      [state]: !this.state[state]
    });
  };
  render() {
    return (
      <>
        {/* Button trigger modal */}
        <div onClick={() => this.toggleModal("exampleModal")} >
            {this.props.socialCard}
        </div>
        
        {/* Modal */}
        <Modal
          className="modal-dialog-centered"
          isOpen={this.state.exampleModal}
          toggle={() => this.toggleModal("exampleModal")}
        >
          <div className="modal-header">

            {/* <h5 className="modal-title" id="exampleModalLabel">
              Instagram Feed
            </h5> */}
            <button
              aria-label="Close"
              className="close"
              data-dismiss="modal"
              type="button"
              onClick={() => this.toggleModal("exampleModal")}
            >
              <span aria-hidden={true}>×</span>
            </button>
          </div>
          
          {this.props.socialExample}

          <div className="modal-footer">
            <Button
              color="secondary"
              data-dismiss="modal"
              type="button"
              onClick={() => this.toggleModal("exampleModal")}
            >
              Close
            </Button>

            <Button href='https://www.instagram.com/thepresidentscoach/' target='_blank' color="primary" type="button" >
              <i class="fab fa-instagram mr-2"></i>Follow Me
            </Button>
          </div>

        </Modal>
      </>
    );
  }
}

export default ModalSocialCard;