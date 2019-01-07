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

    window.scrollY > this.prev ?
    !isHide && this.setState({ isHide: true })
    :
    isHide && this.setState({ isHide: false });

    this.prev = window.scrollY;
 }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    const classHide = this.state.isHide ? 'hide' : '';
    return (
      <div className={`navbar ${classHide}`}>
        <Navbar color="faded" light expand="md" fixed={`top`} className={`container`}> 
          <NavbarBrand href="/">
            <img className="logo" src={logo} alt="Logo" />
          </NavbarBrand>
          <Slider active={this.state.isOpen} onClick={this.toggle} width={20} lineSpacing={6} lineHeight={1} />
          <Collapse className="open-navbar" isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink tag={Link} exact to="/">HOME</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} exact to="/about">ABOUT</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://drive.google.com/file/d/1oQY40RfEZWq7aQY0W4lArUg_gCar8Cog/">RESUME</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Navigation