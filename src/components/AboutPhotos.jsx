import React from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardColumns,
 CardSubtitle, CardBody } from 'reactstrap';

import beach from '../assets/beach.jpg';
import cappucino from '../assets/cappucino.jpg';
import pancakes from '../assets/pancakes.jpg';
import us from '../assets/us.jpg';

const AboutPhotos = (props) => {
  return (
    <CardColumns className="about-photos">
      <Card>
        <CardImg top width="100%" src={beach} alt="Card image cap" />
      </Card>
      <Card>
        <CardImg top width="100%" src={cappucino} alt="Card image cap" />
      </Card>
      <Card>
        <CardImg top width="100%" src={pancakes} alt="Card image cap" />
      </Card>
      <Card>
        <CardImg top width="100%" src={us} alt="Card image cap" />
      </Card>
      <Card>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
      </Card>
      <Card>
        <CardImg top width="100%" src="https://scontent-sjc3-1.cdninstagram.com/vp/a848a88901887b86ff21791a62f4af14/5CC1C2CA/t51.2885-15/e35/14553227_1323825637673955_5623928901500665856_n.jpg?_nc_ht=scontent-sjc3-1.cdninstagram.com&w=256&h=180" alt="Card image cap" />
      </Card>
    </CardColumns>
  );
};

export default AboutPhotos;