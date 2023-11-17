import React from 'react'
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
                    <Nav.Link className="nav-link-custom" as={Link} to=""><i class="fa fa-home" aria-hidden="true"></i></Nav.Link> 
                    <h3 className='divi'>|</h3>
                    <Nav.Link className="nav-link-custom" as={Link} to="/about">
                    <i class="fa fa-book" aria-hidden="true"></i>&nbsp;About Us
                    </Nav.Link>
                    <h3 className='divi'>|</h3>
                    <h4 className='center-text'>Follow us &nbsp;</h4>
                    
                      <Nav.Link className="nav-link-custom" as={Link} to="#"><i class="fab fa-instagram" aria-hidden="true"></i></Nav.Link>
                      <Nav.Link className="nav-link-custom" as={Link} to="#"><i class="fab fa-snapchat-square" aria-hidden="true"></i></Nav.Link>  
                      <Nav.Link className="nav-link-custom" as={Link} to="#"><i class="fab fa-facebook" aria-hidden="true"></i> </Nav.Link>
                      <Nav.Link className="nav-link-custom" as={Link} to="#"><i class="fab fa-github-square" aria-hidden="true"></i> </Nav.Link>
                        
                    
                </Nav>
            </Container>
        </Navbar>
       </>
    )
}

export default Footer;