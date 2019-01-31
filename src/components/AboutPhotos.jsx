import React from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardColumns,
 CardSubtitle, CardBody, CardDeck, CardGroup } from 'reactstrap';

import beach from '../assets/beach.jpg';
import cappucino from '../assets/cappucino.jpg';
import pancakes from '../assets/pancakes.jpg';
import us from '../assets/us.jpg';
import baybridge from '../assets/baybridge.jpg';
import lucas from '../assets/lucas.jpg';
import cafe from '../assets/cafe.jpg';
import hibiscus from '../assets/hibiscus.jpg';


const AboutPhotos = (props) => {
  return (
    <CardColumns className="about-photos">
      <Card className="card h-100">
        <CardImg top width="100%" src={baybridge} alt="Bay Bridge" />
      </Card>
      <Card className="card h-100">
        <CardImg top width="100%" src={hibiscus} alt="Hibiscus" />
      </Card>
      <Card className="card h-100">
        <CardImg top width="100%" src={beach} alt="Beach" />
      </Card>
      <Card className="card h-100">
        <CardImg top width="100%" src={us} alt="Us" className="rotate180" />
      </Card>
      {/* <a href="https://www.instagram.com/yurikaffeine/">
      <Card className="insta-card">
        <CardBody className="insta-body card h-200">
          VIEW MORE ON INSTAGRAM
        </CardBody>
      </Card>
      </a> */}
      <Card className="card h-100">
        <CardImg top width="100%" src={cappucino} alt="Cappucino" />
      </Card>
      <Card className="card h-100">
        <CardImg top width="100%" src={pancakes} alt="Pancakes" />
      </Card>
    </CardColumns>
  );
};

export default AboutPhotos;