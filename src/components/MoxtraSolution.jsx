import React, { Component } from 'react';
import Carousel from 'nuka-carousel';
import { CardImg } from 'reactstrap';

class MoxtraSolution extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0
    };
  }
  componentDidMount() {
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 0);
  }

  render() {
    
    return (
      <Carousel 
      className="moxtra-carousel"
      swiping={true}
      dragging={false}
      // wrapAround={true}
      renderCenterLeftControls={({ previousSlide }) => (
        <button className="prev-arrow" onClick={previousSlide}></button>
      )}
      renderCenterRightControls={({ nextSlide }) => (
        <button className="next-arrow" onClick={nextSlide}></button>
      )}
      slideIndex={this.state.slideIndex}
      afterSlide={slideIndex => this.setState({ slideIndex })}
      slidesToShow={1}
      >
        <CardImg className="moxtra-final" src="http://assets.yurika.design/moxtra/1.png"></CardImg>
        <CardImg className="moxtra-final" src="http://assets.yurika.design/moxtra/2.png"></CardImg>
        <CardImg className="moxtra-final" src="http://assets.yurika.design/moxtra/3.png"></CardImg>
        <CardImg className="moxtra-final" src="http://assets.yurika.design/moxtra/4.png"></CardImg>
        <CardImg className="moxtra-final" src="http://assets.yurika.design/moxtra/5.png"></CardImg>
        <CardImg className="moxtra-final" src="http://assets.yurika.design/moxtra/6.png"></CardImg>
        <CardImg className="moxtra-final" src="http://assets.yurika.design/moxtra/7.png"></CardImg>
        <CardImg className="moxtra-final" src="http://assets.yurika.design/moxtra/8.png"></CardImg>
        <CardImg className="moxtra-final" src="http://assets.yurika.design/moxtra/9.png"></CardImg>
        <CardImg className="moxtra-final" src="http://assets.yurika.design/moxtra/10.png"></CardImg>
        <CardImg className="moxtra-final" src="http://assets.yurika.design/moxtra/11.png"></CardImg>
        <CardImg className="moxtra-final" src="http://assets.yurika.design/moxtra/12.png"></CardImg>
        <CardImg className="moxtra-final" src="http://assets.yurika.design/moxtra/13.png"></CardImg>
        <CardImg className="moxtra-final" src="http://assets.yurika.design/moxtra/14.png"></CardImg>
        <CardImg className="moxtra-final" src="http://assets.yurika.design/moxtra/15.png"></CardImg>
        <CardImg className="moxtra-final" src="http://assets.yurika.design/moxtra/16.png"></CardImg>
        <CardImg className="moxtra-final" src="http://assets.yurika.design/moxtra/17.png"></CardImg>
        <CardImg className="moxtra-final" src="http://assets.yurika.design/moxtra/18.png"></CardImg>
        <CardImg className="moxtra-final" src="http://assets.yurika.design/moxtra/19.png"></CardImg>
        <CardImg className="moxtra-final" src="http://assets.yurika.design/moxtra/20.png"></CardImg>
        <CardImg className="moxtra-final" src="http://assets.yurika.design/moxtra/21.png"></CardImg>
      </Carousel>
    );
  }
}


export default MoxtraSolution;