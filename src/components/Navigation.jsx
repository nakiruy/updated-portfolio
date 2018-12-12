import React from 'react';
import { Link } from 'react-router-dom';
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
  DropdownItem } from 'reactstrap';

import { Slider } from 'react-burgers';

class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div className="navbar" >
        <Navbar color="faded" light expand="md">
          <NavbarBrand href="/">
            <div id="logo" to="/">YJ</div>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse className="open-navbar" isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink tag={Link} to="/">PROJECTS</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/about">ABOUT</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://drive.google.com/file/d/1yTcc5i362vARw2vnQtcjVMeANY_QheAG/">RESUME</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Navigation