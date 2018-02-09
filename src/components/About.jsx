import React from 'react';
import ReactDOM from 'react-dom';

import Navigation from './Navigation';

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="about">
        <Navigation />
      </div>
    )
  }
}

export default About