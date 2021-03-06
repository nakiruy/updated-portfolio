import React from 'react';
import { Redirect } from 'react-router-dom';
import { Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input } from 'reactstrap';

class AuthModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: props.initialModalState,
      password: '',
      redirect: false,
      invalid: false
    };
  }

  handlePasswordChange = (e) =>  {
    e.preventDefault();
    this.setState({ password: e.target.value });
  }

  handleEnterKey = (e) =>  {
    if (e.keyCode === 13){
      e.preventDefault();
      if (this.state.password === 'GamlaStan') {
        this.setState({ redirect: true })
      } else {
        this.setState({ invalid: true })
      }
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.password === 'GamlaStan') {
      this.setState({ redirect: true })
    } else {
      this.setState({ invalid: true })
    }
  }

  render() {
    const { redirect, invalid } = this.state
    let badPassword
    let badPasswordMsg
    if (invalid) {
      badPassword = 'bad-password'
      badPasswordMsg = <span className="bad-password-msg">Incorrect Password. Please try again.</span>
    }
    return (
      <div className="auth-modal">
        {/* <Button color="danger" onClick={this.toggle}>TOGGLE</Button> */}
        <Modal isOpen={this.props.initialModalState} toggle={this.props.toggleModal} className={this.props.className} centered>
          <ModalHeader toggle={this.props.toggleModal}>Password Protected</ModalHeader>
          <ModalBody>
            <FormGroup>
              <Label for="project-password">To view, please enter the password or <a href="mailto:nakiruy@gmail.com"><span id="request-pw">request password</span></a>.</Label>
              <Input className={badPassword} type="password" name="password" id="projPassword" placeholder="Password" onFocus={() => this.setState({ invalid: false })} onKeyDown={this.handleEnterKey} onChange={this.handlePasswordChange} />
              {badPasswordMsg}
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