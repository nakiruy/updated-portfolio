import React from 'react';
import { Button } from 'reactstrap';

import Navigation from './Navigation';

class Resume extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="resume">
        <Navigation />
      </div>
    )
  }
}

export default Resume