import React from 'react';
import { Jumbotron, Card } from 'reactstrap';
import { Link } from 'react-router-dom';

const SpotifyJumbo = (props) => {
  return (
    <div>
      <Link to="/projects/spotify">
      <Jumbotron className="spotify-jumbo">
        <Card className="description-wrapper" id="moxtra-wrapper" body>
          <h1 className="display-3" id="spotify-lead"><span className="highlight">Spotify Driving Mode</span></h1>
          <p className="lead" id="spotify-lead"><span className="highlight">Gesture-based solution for listening to music on the roads.</span></p>
          <p className="lead" id="spotify-lead">
            <Link to="/projects/spotify"><span className="highlight" id="btn-spotify"><span className="btn">View Project</span></span></Link>
          </p>
        </Card>
      </Jumbotron>
      </Link>
    </div>
  );
};

export default SpotifyJumbo