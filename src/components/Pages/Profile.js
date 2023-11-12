import {useContext,useState,useEffect} from 'react'
import {CurrentUser} from '../../contexts/CurrentUser'
import Button from 'react-bootstrap/Button';
import { useParams,Link} from 'react-router-dom'

function Profile() {

    const { currentUser } = useContext(CurrentUser)

    
    return (
        <div>
            <h1>Account Settings </h1>
            <ul>
                <li  style = {{padding:'30px'}}>
                    <div><h3>First Name: {currentUser.firstName}</h3></div>
                    <div><h3>Last Name: {currentUser.lastName}</h3></div>
                    <div><h3>Account type: {currentUser.role}</h3></div>
                    <div><h3>Email: {currentUser.email}</h3></div>
                    <div><h3>Encryptyed Password: {currentUser.pass}</h3></div>
                </li>
            </ul>
        

            <div>
            <Link to={`update`}><Button variant='danger'>Update Profile</Button></Link>
            </div>
        </div>
    
    );
}

export default Profile;