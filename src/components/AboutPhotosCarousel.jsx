import React, { Component } from 'react';
import Carousel from 'nuka-carousel';
import { CardImg } from 'reactstrap';
import AOS from 'aos';

class AboutPhotosCarousel extends Component {

  componentDidMount(){
    AOS.init({
      duration : 2000
    })
  }

  render() {
    return (
      <Carousel 
      className="about-photos-carousel"
      swiping={true}
      dragging={true}
      wrapAround={true}
      renderCenterLeftControls={({ previousSlide }) => (
        <button className="prev-arrow about-arrow" onClick={previousSlide}></button>
      )}
      renderCenterRightControls={({ nextSlide }) => (
        <button className="next-arrow about-arrow" onClick={nextSlide}></button>
      )}
      >
        <CardImg src="http://assets.yurika.design/beach.jpg"></CardImg>
        <CardImg src="http://assets.yurika.design/cappucino.jpg"></CardImg>
        <CardImg src="http://assets.yurika.design/pancakes.jpg"></CardImg>
        <CardImg src="http://assets.yurika.design/baybridge.jpg"></CardImg>
        <CardImg src="http://assets.yurika.design/lucas.jpg"></CardImg>
        <CardImg src="http://assets.yurika.design/cafe.jpg"></CardImg>
        <CardImg src="http://assets.yurika.design/hibiscus.jpg"></CardImg>
      </Carousel>
    );
  }
}


export default AboutPhotosCarousel;