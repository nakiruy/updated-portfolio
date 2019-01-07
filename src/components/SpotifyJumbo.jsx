import React from 'react';
import { Jumbotron } from 'reactstrap';
import { Link } from 'react-router-dom';

const SpotifyJumbo = (props) => {
  return (
    <div>
      <Jumbotron className="spotify-jumbo">
        <h1 className="display-3">Spotify Driving Mode</h1>
        <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
        <p className="lead">
        <Link exact to="/spotify"><a href="#" className="btn">View Project</a></Link>
        </p>
      </Jumbotron>
    </div>
  );
};

export default SpotifyJumbo