import React from 'react';
import { Container, Col } from 'reactstrap';

class SocialIcons extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }
  render() {
    return (
      <div className="social-icons">
          <div className="icons">
            <Container>
              <Col>
                  <a href="mailto:nakiruy@gmail.com">
                      <img className="contact-icon" id="email-icon" src="http://assets.yurika.design/email.png" alt="Email" />
                  </a>
                  <a href="https://www.linkedin.com/in/yurikajacobsson/">
                      <img className="contact-icon" src="http://assets.yurika.design/linkedin.png" alt="LinkedIn" />
                  </a>
                  <a href="https://www.instagram.com/yurikaffeine/">
                      <img className="contact-icon" id="ig-icon" src="http://assets.yurika.design/instagram.png" alt="Instagram" />
                  </a>
                </Col>
            </Container>
          </div>
      </div>
    );
  }
}

export default SocialIcons