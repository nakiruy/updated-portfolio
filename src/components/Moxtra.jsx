import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

const Moxtra = (props) => {
  return (
    <div>
      <Jumbotron className="moxtra">
        <h1 className="display-3">Hello, world!</h1>
        <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
        <p className="lead">
          <Button color="secondary">View Project</Button>
        </p>
      </Jumbotron>
    </div>
  );
};

export default Moxtra;