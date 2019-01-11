import React from 'react';
import { Jumbotron } from 'reactstrap';
import { Link } from 'react-router-dom';

const MoxtraJumbo = (props) => {
  return (
    <div>
      <Jumbotron className="moxtra-jumbo">
        <h1 className="display-3" id="moxtra-lead"><span className="highlight-moxtra">Onboarding Process for Moxtra</span></h1>
        <p className="lead" id="moxtra-lead"><span className="highlight-moxtra">Mobile-first messaging application for all business needs.</span></p>
        <p className="lead" id="moxtra-lead">
          <Link exact to="/moxtra"><a className="btn">View Project</a></Link>
        </p>
      </Jumbotron>
    </div>
  );
};

export default MoxtraJumbo