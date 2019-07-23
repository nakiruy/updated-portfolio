import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input } from 'reactstrap';

class AuthModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: props.initialModalState
    };
}

  render() {
    return (
      <div className="auth-modal">
        {/* <Button color="danger" onClick={this.toggle}>TOGGLE</Button> */}
        <Modal isOpen={this.props.initialModalState} toggle={this.props.toggleModal} className={this.props.className} centered>
          <ModalHeader toggle={this.props.toggleModal}>Password Protected</ModalHeader>
          <ModalBody>
            <FormGroup>
              <Label for="examplePassword">To view, please enter the password or request password.</Label>
              <Input type="password" name="password" id="examplePassword" placeholder="Password" />
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <span class="btn" onClick={this.props.toggleModal}>View Project</span>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default AuthModal