import React from 'react';
import { Jumbotron, Card, Button, CardTitle, CardText } from 'reactstrap';
import { Link } from 'react-router-dom';

const SpotifyJumbo = (props) => {
  return (
      <Jumbotron className="spotify-jumbo">
        <Card className="description-wrapper" id="moxtra-wrapper" body>
          <h1 className="display-3" id="spotify-lead"><span className="highlight">Spotify Driving Mode</span></h1>
          <p className="lead" id="spotify-lead"><span className="highlight">Gesture-based solution for listening to music on the roads.</span></p>
          <p className="lead" id="spotify-lead">
            <Link exact to="/projects/spotify"><span className="highlight" id="btn-spotify"><a className="btn">View Project</a></span></Link>
          </p>
        </Card>
      </Jumbotron>
  );
};

export default SpotifyJumbo