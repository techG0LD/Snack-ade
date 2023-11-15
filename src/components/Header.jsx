

import { useState, useEffect, useContext } from "react";
import { CurrentUser } from "../contexts/CurrentUser";
import { Link } from "react-router-dom";
// Import React Bootstrap components
import { Navbar, Nav, NavDropdown, Button, Form, FormControl, InputGroup } from "react-bootstrap";
import SearchBar from "./SearchBar";

function Navigation() {
  let { currentUser, setCurrentUser } = useContext(CurrentUser);

  //define a handleClick function
  function handleClick(e) {
    // Remove all items from localStorage
    localStorage.clear();
    //resets the currentUser to null,thus giving you the nav bar only the options to login/sign up
    setCurrentUser(null);
  }

  let loginActions = (
    <>
      {/* <Nav.Link className="nav-link-custom" as={Link} to="/sign-up">
      Sign Up
    
      </Nav.Link> */}
      <Nav.Link className="nav-link-custom" as={Link} to="/login">
      <i class="fa fa-user-circle" aria-hidden="true"></i>&nbsp;Sign in
      </Nav.Link>
    </>
  );

  if (currentUser) {
    loginActions = (
      <>
        <Nav.Link className="nav-link-custom" as={Link} onClick={handleClick} to="/">
          <Button variant="outline-light">Sign Out</Button>
        </Nav.Link>
        <NavDropdown
          title={`Logged in as ${currentUser.firstName} ${currentUser.lastName}`}
          id="user-dropdown"
        >
          <NavDropdown.Item className="nav-link-custom" as={Link} to={`/profile/${currentUser.user_id}`}>
            Account
          </NavDropdown.Item>
          {currentUser.role === "seller" || currentUser.role === "admin" ? (
            <NavDropdown.Item className="nav-link-custom" as={Link} to="/addSnack">
              Add Snack
            </NavDropdown.Item>
          ) : null}
        </NavDropdown>
      </>
    );
  }

  return (
    <>
      <Navbar className="navbar-custom" variant="" expand="lg">
        <Navbar.Brand className="navbar-custom"  as={Link} to="/">
          Snack-ade.com
        </Navbar.Brand>
       
        <Navbar.Toggle className="nav-link-custom" aria-controls="basic-navbar-nav">
        {/* Replace your icon here */}
        <i class="fa fa-bars" aria-hidden="true"></i>
        </Navbar.Toggle>
        <Navbar.Collapse  id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link className="nav-link-custom" as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link className="nav-link-custom" as={Link} to="/catalog">
              Catalog
            </Nav.Link>
            <Nav.Link className="nav-link-custom" as={Link} to="/about">
              About
            </Nav.Link>
          </Nav>
          <SearchBar/>

          <Nav>{loginActions}</Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default Navigation;



