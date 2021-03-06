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
    // this.toggle = this.toggle.bind(this);
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

    if (window.scrollY === 0) {
      this.setState({ isHide: false })
    }
    window.scrollY > this.prev ?
    !isHide && this.setState({ isHide: true })
    :
    isHide && this.setState({ isHide: false });

    this.prev = window.scrollY;
 }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    let classHide = this.state.isHide ? 'hide' : '';
    let conditionalLogo;

    if (window.location.pathname.includes("/tapcastplatform")) {
      conditionalLogo = <img className="logo" src="https://assets.yurika.design/logo-tapcastcol.png"  alt="Logo" />;
    } else if (window.location.pathname.includes("/moxtra")) {
      conditionalLogo = <img className="logo" src="https://assets.yurika.design/logo-moxtracol.png"  alt="Logo" />;
    } else if (window.location.pathname.includes("/spotify")) {
      conditionalLogo = <img className="logo" src="https://assets.yurika.design/logo-spotifycol.png" alt="Logo" />;
    } else if (window.location.pathname.includes("/tapcastbilling")) {
      conditionalLogo = <img className="logo" src="https://assets.yurika.design/logo-tapcastbillingcol.png" alt="Logo" />;
    } else if (window.location.pathname.includes("/groupon")) {
      conditionalLogo = <img className="logo" src="https://assets.yurika.design/logo-grouponcol.png" alt="Logo" />;
    } else {
      conditionalLogo = <img className="logo" src="https://assets.yurika.design/logo.png" alt="Logo" />;
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
                <NavLink href="https://drive.google.com/file/d/1ZT7E42VgzeEiyoBLHUx71oV7IS59dc-4/">RESUME</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Navigation