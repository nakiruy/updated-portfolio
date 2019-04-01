import React from 'react';
import { Card, CardImg, CardColumns, CardBody } from 'reactstrap';

import beach from '../assets/beach.jpg';
import cappucino from '../assets/cappucino.jpg';
import pancakes from '../assets/pancakes.jpg';
import us from '../assets/us.jpg';
import baybridge from '../assets/baybridge.jpg';
import hibiscus from '../assets/hibiscus.jpg';


const AboutPhotos = (props) => {
  return (
    <CardColumns className="about-photos">
      <Card>
        <CardImg top width="100%" src="http://assets.yurika.design/baybridge.jpg" alt="Bay Bridge" />
      </Card>
      <Card>
        <CardImg top width="100%" src="http://assets.yurika.design/hibiscus.jpg" alt="Hibiscus" />
      </Card>
      <Card>
        <CardImg top width="100%" src="http://assets.yurika.design/beach.jpg" alt="Beach" />
      </Card>
      <Card>
        <CardImg top width="100%" src="http://assets.yurika.design/us.jpg" alt="Us" className="rotate180" />
      </Card>
      <a href="https://www.instagram.com/yurikaffeine/">
      <Card className="insta-card">
        <CardBody className="insta-body">
          FOLLOW ME ON INSTAGRAM
        </CardBody>
      </Card>
      </a>
      <Card>
        <CardImg top width="100%" src="http://assets.yurika.design/cappucino.jpg" alt="Cappucino" />
      </Card>
      <Card>
        <CardImg top width="100%" src="http://assets.yurika.design/pancakes.jpg" alt="Pancakes" />
      </Card>
    </CardColumns>
  );
};

export default AboutPhotos;