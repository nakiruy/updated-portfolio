import React from 'react';
import { Jumbotron } from 'reactstrap';

const Tapcast = (props) => {
  return (
    <div>
      <Jumbotron className="tapcast">
        <h1 className="display-3">Tapcast Platform Redesign</h1>
        <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
        <p className="lead">
          <a href="#" className="btn">View Project</a>
        </p>
      </Jumbotron>
    </div>
  );
};

export default Tapcast;