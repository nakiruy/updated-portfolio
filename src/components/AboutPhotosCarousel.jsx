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
        <CardImg src={beach}></CardImg>
        <CardImg src={cappucino}></CardImg>
        <CardImg src={pancakes}></CardImg>
        <CardImg src={us}></CardImg>
        <CardImg src={baybridge}></CardImg>
        <CardImg src={lucas}></CardImg>
        <CardImg src={cafe}></CardImg>
        <CardImg src={hibiscus}></CardImg>
      </Carousel>
    );
  }
}


export default AboutPhotosCarouselNew;