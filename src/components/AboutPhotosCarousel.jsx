import React, { Component } from 'react';
import Carousel from 'nuka-carousel';
import { CardImg } from 'reactstrap';
import AOS from 'aos';

import beach from '../assets/beach.jpg';
import cappucino from '../assets/cappucino.jpg';
import pancakes from '../assets/pancakes.jpg';
import baybridge from '../assets/baybridge.jpg';
import lucas from '../assets/lucas.jpg';
import cafe from '../assets/cafe.jpg';
import hibiscus from '../assets/hibiscus.jpg';
import us from '../assets/us.jpg';

const items = [
  {
    src: beach,
    caption: 'beach'
  },
  {
    src: cappucino,
    caption: 'cappucino'
  },
  {
    src: pancakes,
    caption: 'pancakes'
  },
  {
    src: us,
    caption: 'us'
  },
  {
    src: baybridge,
    caption: 'baybridge'
  },
  {
    src: lucas,
    caption: 'lucas'
  },
  {
    src: cafe,
    caption: 'cafe'
  },
  {
    src: hibiscus,
    caption: 'hibiscus'
  },
];

class AboutPhotosCarouselNew extends Component {
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


export default AboutPhotosCarouselNew;