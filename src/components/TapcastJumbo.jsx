import React from 'react';
import { Jumbotron } from 'reactstrap';
import { Link } from 'react-router-dom';

const TapcastJumbo = (props) => {
  return (
    <div>
      <Jumbotron className="tapcast-jumbo">
        <h1 className="display-3">Redesigning Tapcast Platform</h1>
        <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
        <p className="lead">
        <Link exact to="/tapcast"><a href="#" className="btn">View Project</a></Link>
        </p>
      </Jumbotron>
    </div>
  );
};

export default TapcastJumbo