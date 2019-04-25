import React from 'react';
import { Jumbotron, Card } from 'reactstrap';
import { Link } from 'react-router-dom';


const TapcastBillingJumbo = (props) => {
  return (
    <div>
      <Link to="/projects/tapcast-billing">
      <Jumbotron className="tapcast-billing-jumbo">
        <Card className="tapcast-billing-description-wrapper" body>
          <h1 className="display-3" id="tapcast-billing-lead"><span className="highlight-tapcast-billing">Tapcast Billing</span></h1>
          <p className="lead" id="tapcast-billing-lead"><span className="highlight-tapcast-billing">Mobile-first collaborative platform for all business needs.</span></p>
          <p className="lead" id="tapcast-billing-lead">
            <span className="highlight-tapcast-billing" id="btn-tapcast-billing"><span className="btn">View Project</span></span>
          </p>
        </Card>
      </Jumbotron>
      </Link>
    </div>
  );
};

export default TapcastBillingJumbo