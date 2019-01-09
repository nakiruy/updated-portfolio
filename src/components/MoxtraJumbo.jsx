import React from 'react';
import { Jumbotron } from 'reactstrap';
import { Link } from 'react-router-dom';

const MoxtraJumbo = (props) => {
  return (
    <div>
      <Jumbotron className="moxtra-jumbo">
        <h1 className="display-3" id="moxtra-lead"><span className="highlight">Onboarding Process for Moxtra</span></h1>
        <p className="lead" id="moxtra-lead"><span className="highlight">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</span></p>
        <p className="lead" id="moxtra-lead">
          <Link exact to="/moxtra"><a href="#" className="btn">View Project</a></Link>
        </p>
      </Jumbotron>
    </div>
  );
};

export default MoxtraJumbo