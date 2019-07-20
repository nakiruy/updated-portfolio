import React from 'react';
import { Jumbotron, Card } from 'reactstrap';
import { Link } from 'react-router-dom';

import AuthModal from './AuthModal';

class TapcastBillingJumbo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }

  toggleModal = () => {
    this.setState({
      modal: !this.state.show
    });
    console.log('toggle!')
  }

  render() {
    return (
      <div>
        <div onClick={this.toggleModal}>
          <Jumbotron className="tapcast-billing-jumbo">
            <Card className="tapcast-billing-description-wrapper" body>
              <h1 className="display-3" id="tapcast-billing-lead"><span className="highlight-tapcast-billing">Improving Payments for Tapcast</span></h1>
              <p className="lead" id="tapcast-billing-lead"><span className="highlight-tapcast-billing">Demystifying subscription billing method for SaaS customers.</span></p>
              <p className="lead" id="tapcast-billing-lead">
                <span className="highlight-tapcast-billing" id="btn-tapcast-billing"><span className="btn">View Project</span></span>
              </p>
            </Card>
          </Jumbotron>
          <AuthModal initialModalState={false} />
        </div>
      </div>
    )}
};

export default TapcastBillingJumbo