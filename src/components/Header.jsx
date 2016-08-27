import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

export default function Header() {
  return (<Navbar inverse>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="/">Ript Games API Static Data Viewer</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <NavItem eventKey={1} href="#">Champions</NavItem>
        <NavItem eventKey={2} href="#">Items</NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>);
}
