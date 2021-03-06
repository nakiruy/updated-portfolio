import React from 'react';
import { Jumbotron, Card } from 'reactstrap';
import { Link } from 'react-router-dom';


const MoxtraJumbo = (props) => {
  return (
    <div>
      <Link to="/projects/moxtra">
      <Jumbotron className="moxtra-jumbo">
        <Card className="moxtra-description-wrapper" body>
          <h1 className="display-3" id="moxtra-lead"><span className="highlight-moxtra">Onboarding Process for Moxtra</span></h1>
          <p className="lead" id="moxtra-lead"><span className="highlight-moxtra">Mobile-first collaborative platform for all business needs.</span></p>
          <p className="lead" id="moxtra-lead">
            <span className="highlight-moxtra" id="btn-moxtra"><span className="btn">View Project</span></span>
          </p>
        </Card>
      </Jumbotron>
      </Link>
    </div>
  );
};

export default MoxtraJumbo