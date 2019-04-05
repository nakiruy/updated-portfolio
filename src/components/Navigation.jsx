import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink } from 'reactstrap';

import { Slider } from 'react-burgers';

class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      isHide: false
    };
    this.toggle = this.toggle.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.hideBar);
    window.addEventListener('touchmove', this.hideBar);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.hideBar);
    window.removeEventListener('touchmove', this.hideBar);
  }

  hideBar = () => {
    const { isHide } = this.state

    if (window.pageYOffset === 0) {
      this.setState({ isHide: false })
    }
    window.pageYOffset >= this.prev ?
    !isHide && this.setState({ isHide: true })
    :
    isHide && this.setState({ isHide: false });

    this.prev = window.pageYOffset;
 }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    const classHide = this.state.isHide ? 'hide' : '';
    let conditionalLogo;

    if (window.location.pathname.includes("/tapcast")) {
      conditionalLogo = <img className="logo" src="http://assets.yurika.design/logo-tapcastcol.png"  alt="Logo" />;
    } else if (window.location.pathname.includes("/moxtra")) {
      conditionalLogo = <img className="logo" src="http://assets.yurika.design/logo-moxtracol.png"  alt="Logo" />;
    } else if (window.location.pathname.includes("/spotify")) {
      conditionalLogo = <img className="logo" src="http://assets.yurika.design/logo-spotifycol.png" alt="Logo" />;
    } else {
      conditionalLogo = <img className="logo" src="http://assets.yurika.design/logo.png" alt="Logo" />;
    }
    return (
      <div className={`navigation ${classHide}`}>
        <Navbar color="faded" light expand="md" fixed={`top`} className={`container`}> 
          <NavbarBrand href="/">
            {conditionalLogo}
          </NavbarBrand>
          <Slider active={this.state.isOpen} onClick={this.toggle} width={20} lineSpacing={6} lineHeight={1} />
          <Collapse className="open-navbar" isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink tag={Link} exact to="/">HOME</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} exact to="/about">ABOUT & CONTACT</NavLink>
              </NavItem>
              {/* <NavItem>
                <NavLink href="mailto:nakiruy@gmail.com">CONTACT</NavLink>
              </NavItem> */}
              <NavItem>
                <NavLink href="https://drive.google.com/file/d/1AhwxbLab45q7ihrDbbfHcflUUq-1hEcm/">RESUME</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Navigation