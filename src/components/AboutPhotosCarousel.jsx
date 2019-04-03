import React, { Component } from 'react';
import Carousel from 'nuka-carousel';
import { CardImg } from 'reactstrap';
import AOS from 'aos';

class AboutPhotosCarousel extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    AOS.init({
      duration : 2000
    })
  }

  render() {
    return (
      <Carousel 
      className="about-photos-carousel"
      withoutControls="false"
      swiping="true"
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