import React from 'react';
import { Jumbotron } from 'reactstrap';
import { Link } from 'react-router-dom';

const TapcastJumbo = (props) => {
  return (
    <div>
      <Jumbotron className="tapcast-jumbo">
        <h1 className="display-3" id="tapcast-lead"><span className="highlight">Redesigning Tapcast Platform</span></h1>
        <p className="lead" id="tapcast-lead"><span className="highlight">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</span></p>
        <p className="lead" id="tapcast-lead">
          <Link exact to="/tapcast"><a href="#" className="btn">View Project</a></Link>
        </p>
      </Jumbotron>
    </div>
  );
};

export default TapcastJumbo