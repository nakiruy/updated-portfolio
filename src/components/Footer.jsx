import React from 'react';
import ReactDOM from 'react-dom';


class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="footer">
        <div class="icons">INSERT ICONS HERE</div>
        <div id="copyright">Made with 💕 & ☕ by Yurika</div>
      </div>
    )
  }
}

export default Footer