import React from 'react';
import { NavLink } from 'react-router-dom';
import CartButton from '../Cart/CartButton';
import classes from './Navbar.module.css';

import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Navbars = () => {
  return (
    <Navbar
      collapseOnSelect
      bg="dark"
      variant="dark"
      sticky="top"
      tabIndex="2"
      expand="lg"
    >
      <Container>
        <Navbar.Brand>
          <h3>
            Snatch<span>Deal</span>
          </h3>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav className="me-auto">
            <Nav.Link>
              <NavLink
                className={classes.navlinks}
                activeClassName={classes.active}
                to="/home"
              >
                Home
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink
                className={classes.navlinks}
                activeClassName={classes.active}
                to="/about"
              >
                Our Service
              </NavLink>
            </Nav.Link>
          </Nav>
          <CartButton />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbars;
