import React from 'react';
import { Redirect } from 'react-router-dom';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input } from 'reactstrap';

class AuthModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: props.initialModalState,
      password: '',
      redirect: false
    };
  }

  handlePasswordChange = (e) =>  {
    e.preventDefault()
    this.setState({ password: e.target.value });
  }

  handleSubmit = () => {
    if (this.state.password === 'Hello') {
      this.setState({ redirect: true })
    } 
  }

  render() {
    const { redirect } = this.state
    return (
      <div className="auth-modal">
        {/* <Button color="danger" onClick={this.toggle}>TOGGLE</Button> */}
        <Modal isOpen={this.props.initialModalState} toggle={this.props.toggleModal} className={this.props.className} centered>
          <ModalHeader toggle={this.props.toggleModal}>Password Protected</ModalHeader>
          <ModalBody>
            <FormGroup>
              <Label for="project-password">To view, please enter the password or <a href="mailto:nakiruy@gmail.com"><span id="request-pw">request password</span></a>.</Label>
              <Input type="password" name="password" id="examplePassword" placeholder="Password" onChange={this.handlePasswordChange} />
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <span className="btn" onClick={this.handleSubmit}>
              {redirect && (
                <Redirect push to={ null || '/projects/tapcastbilling' } />
              )}
              View Project
            </span>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default AuthModal