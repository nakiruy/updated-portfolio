import React from 'react';
import ReactDOM from 'react-dom';

class Greetings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="greetings">
        <h1 id="name">Yurika Jacobsson.</h1>
        <h3 id="headline">UX/UI Designer & Developer.</h3>
        <h3 id="headline">I create thoughtful experiences.</h3>
      </div>
    )
  }
}

export default Greetings