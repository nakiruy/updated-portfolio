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
      <div className="contact-icons">
          <div className="icons">
            <Container>
              <Col>
                  <a href="mailto:nakiruy@gmail.com">
                      <img className="contact-icon" id="email-icon" src="https://assets.yurika.design/email.png" alt="Email" />
                  </a>
                  <a href="https://www.linkedin.com/in/yurikajacobsson/">
                      <img className="contact-icon" id="linkedin-icon" src="https://assets.yurika.design/in.png" alt="LinkedIn" />
                  </a>
                  <a href="https://www.instagram.com/yurikaffeine/">
                      <img className="contact-icon" id="ig-icon" src="https://assets.yurika.design/instagram.png" alt="IG" />
                  </a>
                </Col>
            </Container>
          </div>
      </div>
    );
  }
}

export default SocialIcons