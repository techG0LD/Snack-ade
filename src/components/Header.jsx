

import { useState, useEffect, useContext } from "react";
import { CurrentUser } from "../contexts/CurrentUser";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Button, Form, FormControl, InputGroup } from "react-bootstrap";
import SearchBar from "./SearchBar";

function Navigation() {
  let { currentUser, setCurrentUser } = useContext(CurrentUser);

  function handleClick(e) {
    // Remove all items from localStorage
    localStorage.clear();
    //resets the currentUser to null,thus giving you the nav bar only the options to login/sign up
    setCurrentUser(null);
  }

  let loginActions = (
    <>
      <Nav.Link className="nav-link-custom" as={Link} to="/login">
      <i class="fa fa-user-circle" aria-hidden="true"></i>&nbsp;Sign in
      </Nav.Link>
    </>
  );

  if (currentUser) {
    loginActions = (
      <>
         {/* <Nav.Link className="nav-link-custom" as={Link} onClick={handleClick} to="/">
          <Button variant="outline-light">Sign Out</Button>
        </Nav.Link> */}
        <NavDropdown
          title={`Signed in as ${currentUser.firstName} ${currentUser.lastName}`}
          id="user-dropdown"
        >
          <NavDropdown.Item className="navbar-custom" as={Link} to={`/profile/${currentUser.user_id}`}>
            Account <i class="fa fa-cogs" aria-hidden="true"></i>
          </NavDropdown.Item>
          {currentUser.role === "seller" || currentUser.role === "admin" ? (
            <NavDropdown.Item className="navbar-custom" as={Link} to="/addSnack">
              Add Snack
            </NavDropdown.Item>
          ) : null}
           <NavDropdown.Item className="navbar-custom" onClick={handleClick} as={Link} to={`/`}>
          Sign Out&nbsp;<i class="fa fa-user-circle" aria-hidden="true"></i>
          </NavDropdown.Item>
         
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
            <Nav.Link className="nav-link-custom" as={Link} to="/#">
              <i class="fa fa-shopping-cart" aria-hidden="true"></i>
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



