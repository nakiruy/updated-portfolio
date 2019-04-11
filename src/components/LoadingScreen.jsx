import React from 'react';

import { Cube } from 'react-preloaders';

class LoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  componentDidMount(){
    window.scrollTo(0, 0);
  }

  render() {
    return (
    <div class="loading">
      <Cube
        color={'#4724F7'} //Default #2D2D2D
        bgColor={'#f4f4f4'} //Default #F7F7F7
        time={1500} //Default #1300
      />
    </div>
    )
  }
}

export default LoadingScreen