import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Link, useParams} from 'react-router-dom'
import {useState,useEffect,useContext} from 'react'



function UpdateProfile() {
  
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



    
    function handlePassChange(e) {
    
    const newValue = e.target.value;
    
    localStorage.setItem('password', newValue);
  }

  function deleteStorage(e) {
    localStorage.clear();
  }


  return (
    <div> 
        <Form className="form" method="POST" action={`http://localhost:4005/api/users/${user.user_id}?_method=PUT`}>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>First Name:</Form.Label>
                    <input className='form-control' id='firstName' name='firstName'   defaultValue={user.firstName} required/>
                    <Form.Label>Last Name:</Form.Label>
                    <input className='form-control' id='lastName' name='lastName'   defaultValue={user.lastName} required/>
                    <Form.Label>Email:</Form.Label>
                    <input className="form-control" id="email" name="email"  defaultValue={user.email} required/>
                    <Form.Label>Account Type:</Form.Label>
                     <select
                        id="role"
                        name="role"
                        required
                        value={user.role} // set the value of the select to user.role
                        onChange={(e) => setUser({ ...user, role: e.target.value })} //update the user.role state when the select changes
                        className="form-control"
                    >
                        <option value='buyer'>Buyer</option>
                        <option value='seller'>Seller</option>
                    </select>
                    <Form.Label>Password:</Form.Label>
                    <input className="form-control" id="pass" name="pass" required defaultValue={localStorage.getItem('password')} onChange={handlePassChange}/>
                </Form.Group>
            </Row>
            
           
            <br />
            <br />

            
            <Button variant="danger"   type="submit" value="submit" >Update Profile </Button>

             <form method = "POST" action={`http://localhost:4005/api/users/${user.user_id}?_method=DELETE`}>
                <Button type="submit" className="btn btn-danger" onClick={deleteStorage}>Delete User</Button>
            </form>       

            <Link to='/'>
            <Button variant="danger">
                Back to Home
            </Button>
            </Link>
        </Form>     
    </div>
    )
}

export default UpdateProfile;