import React from 'react';
import { Jumbotron } from 'reactstrap';
import { Link } from 'react-router-dom';


const MoxtraJumbo = (props) => {
  return (
      <Jumbotron className="moxtra-jumbo">
        <h1 className="display-3" id="moxtra-lead"><span className="highlight-moxtra">Onboarding Process for Moxtra</span></h1>
        <p className="lead" id="moxtra-lead"><span className="highlight-moxtra">Mobile-first messaging application for all business needs.</span></p>
        <p className="lead" id="moxtra-lead">
          <Link exact to="/moxtra"><span className="highlight-moxtra" id="btn-moxtra"><a className="btn">View Project</a></span></Link>
        </p>
      </Jumbotron>
  );
};

export default MoxtraJumbo