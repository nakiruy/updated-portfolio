import React from 'react';
import { Jumbotron, Card } from 'reactstrap';
import { Link } from 'react-router-dom';

const TapcastJumbo = (props) => {
  return (
      <Jumbotron className="tapcast-jumbo">
        <Card className="description-wrapper" body>
          <h1 className="display-3" id="tapcast-lead"><span className="highlight">Redesigning Tapcast Platform</span></h1>
          <p className="lead" id="tapcast-lead"><span className="highlight">Marketing intelligence platform for Facebook advertising.</span></p>
          <p className="lead" id="tapcast-lead">
            <Link to="/projects/tapcast"><span className="highlight" id="btn-tapcast"><span className="btn">View Project</span></span></Link>
          </p>
        </Card>
      </Jumbotron>
  );
};

export default TapcastJumbo