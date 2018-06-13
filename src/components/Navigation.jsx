import React from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
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
      <div className="navbar">
        <Navbar color="faded" light expand="md">
          <NavbarBrand href="/">
            <div id="logo" to="/">YJ</div>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink tag={Link} to="/projects">PROJECTS</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/about">ABOUT</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/resume">RESUME</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Navigation