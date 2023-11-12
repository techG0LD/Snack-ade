import { useState, useEffect, useContext  } from 'react'

 import { CurrentUser } from '../contexts/CurrentUser';
import { Link  } from 'react-router-dom';

function Navigation() {

    // const history = useHistory()

    const { currentUser } = useContext(CurrentUser)

    let loginActions = (
        <>
            <li style={{ display:'inline-block' ,float: 'right' }}>
                <Link to="/sign-up" >
                    Sign Up
                </Link>
            </li>
            <li style={{display:'inline', float: 'right' }}>
                <Link to="/login">
                    Login
                </Link>
            </li>
        </>
    )

    if (currentUser) {
        loginActions = (
            <li style={{ float: 'right' }}>
                Logged in as {currentUser.firstName} {currentUser.lastName}
            </li>
        )
    }


    let addSnackButton = null
    if(currentUser?.role === 'seller' || currentUser?.role === 'admin'){
        addPlaceButton
    }

    return (
        <>
        
        <nav>
            <h1>Snack-ade.com</h1>
            <ul>
                <li style={{ float: 'none' }}>
                    <Link to=""  >
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/catalog"  >
                        Catalog
                    </Link>
                </li>
                <li>
                    <Link to="/about" >
                        About
                    </Link>
                </li>
                <li>
                    <Link to="/addSnack" >
                        Add Snack
                    </Link>
                </li>
                {loginActions}
            </ul>
        </nav>
       </>
    )
}

export default Navigation;






// import React from 'react'
// import {Link} from 'react-router-dom';

// const Header = () => {
//     return (
//         <header>
//             <h1>Snack-ade</h1>
//             {/* <SearchBar></SearchBar> */}
//             <ul>
//             <li>
//               <Link to='/'>Home</Link>
//             </li>
//             <li>
//               <Link to='/catalog'>Catalog</Link>
//             </li>
//             <li>
//               <Link to='/about'>About Us</Link>
//             </li>
//             <li></li>
//             </ul>
//         </header>
      
//     )
// }

// export default Header