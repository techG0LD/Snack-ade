import {useContext,useState,useEffect} from 'react'
//  import {CurrentUser} from '../../contexts/CurrentUser'
import Button from 'react-bootstrap/Button';
import { useParams,Link} from 'react-router-dom'

function Profile() {

    const [user, setUser] = useState([''])
      const params = useParams();
     
       
     
    useEffect(()=> {
        const fetchData = async () => {
            const response = await fetch(`http://localhost:4005/api/users/${JSON.stringify(params)}`)
            const json = await response.json()
            setUser(json)
        }
        fetchData()
    }, [] )



    // const { currentUser } = useContext(CurrentUser)

    
    return (
        <div>
            <h1>Account Settings </h1>
            <ul>
                <li  style = {{padding:'30px'}}>
                    <div><h3>First Name: {user.firstName}</h3></div>
                    <div><h3>Last Name: {user.lastName}</h3></div>
                    <div><h3>Account type: {user.role}</h3></div>
                    <div><h3>Email: {user.email}</h3></div>
                    <div><h3>Encryptyed Password: {user.pass}</h3></div>
                </li>
            </ul>
        

            <div>
            <Link to={`update/`}><Button variant='danger'>Update Profile</Button></Link>
            </div>
        </div>
    
    );
}

export default Profile;