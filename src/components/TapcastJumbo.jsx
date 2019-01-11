import React from 'react';
import { Jumbotron } from 'reactstrap';
import { Link } from 'react-router-dom';

const TapcastJumbo = (props) => {
  return (
    <div>
      <Jumbotron className="tapcast-jumbo">
        <h1 className="display-3" id="tapcast-lead"><span className="highlight">Redesigning Tapcast Platform</span></h1>
        <p className="lead" id="tapcast-lead"><span className="highlight">Marketing intelligence, data analytic platform.</span></p>
        <p className="lead" id="tapcast-lead">
          <Link exact to="/tapcast"><a className="btn">View Project</a></Link>
        </p>
      </Jumbotron>
    </div>
  );
};

export default TapcastJumbo