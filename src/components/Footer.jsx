import React from 'react'

import { useState, useEffect, useContext  } from 'react'


import { Link  } from 'react-router-dom';

function Footer() {

   
    
    

    return (
        <>
        
        <nav>
       
            <ul>
                <li style={{ float: 'none' }}>
                    <Link to=""  >
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/contact"  >
                        Contact Us
                    </Link>
                </li>
                <li>
                    <Link to="/about" >
                        About
                    </Link>
                </li>
                
                
            </ul>
        </nav>
       </>
    )
}

export default Footer;


