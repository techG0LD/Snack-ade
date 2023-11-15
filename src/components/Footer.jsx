import React from 'react'
import { useState, useEffect, useContext  } from 'react'
import { Link  } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

function Footer() {

    return (
        <>
        
        <Navbar className='navbar-custom' variant="" fixed="bottom"> 
       
            <Container> 
                <Nav className="mx-auto"> 
                    <Nav.Link as={Link} to="">Home</Nav.Link> 
                    <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
                    <Nav.Link as={Link} to="/about">About</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
       </>
    )
}

export default Footer;
