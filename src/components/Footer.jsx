import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from 'reactstrap';

class Footer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }
  render() {
    return (
      <div className="footer">
          <div class="icons">INSERT ICONS HERE github ig</div>
          <div id="copyright">copyright © 2018 yurika jacobsson. all rights reserved.</div>
      </div>
    );
  }
}

export default Footer