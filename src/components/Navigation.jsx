import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import {
  Col,
  Collapse,
  Container,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem, 
  Row } from 'reactstrap';
  
import logo from '../assets/logo.png';
import SocialIcons from './SocialIcons';

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
      conditionalLogo = <img className="logo-wback" src={logo} alt="Logo" />;
    } else if (window.location.pathname.includes("/moxtra")) {
      conditionalLogo = <img className="logo-wback" src={logo} alt="Logo" />;
    } else if (window.location.pathname.includes("/spotify")) {
      conditionalLogo = <img className="logo-wback" src={logo} alt="Logo" />;
    } else {
      conditionalLogo = <img className="logo" src={logo} alt="Logo" />;
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
                <NavLink href="https://drive.google.com/file/d/1eKN9C3ctdTQ1kI03yxyHtY6oJ85POLY1/">RESUME</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Navigation