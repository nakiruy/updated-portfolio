import React from 'react';
import { Jumbotron, Card } from 'reactstrap';
import { Link } from 'react-router-dom';

const TapcastJumbo = (props) => {
  return (
      <Jumbotron className="tapcast-jumbo">
        <Card className="description-wrapper" body>
          <h1 className="display-3" id="tapcast-lead"><span className="highlight">Redesigning Tapcast Platform</span></h1>
          <p className="lead" id="tapcast-lead"><span className="highlight">Marketing intelligence, data analytic platform.</span></p>
          <p className="lead" id="tapcast-lead">
            <Link exact to="/projects/tapcast"><span className="highlight" id="btn-tapcast"><a className="btn">View Project</a></span></Link>
          </p>
        </Card>
      </Jumbotron>
  );
};

export default TapcastJumbo