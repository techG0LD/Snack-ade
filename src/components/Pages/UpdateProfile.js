import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Link, useParams} from 'react-router-dom'
import {useState,useEffect,useContext} from 'react'
import {CurrentUser} from '../../contexts/CurrentUser'


function UpdateProfile() {

    const { currentUser } = useContext(CurrentUser)


  return (
    <div> 
        <Form className="form" method="POST" action={`http://localhost:4005/api/users?_method=PUT`}>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>First Name:</Form.Label>
                    <input className='form-control' id='firstName' name='firstName'   defaultValue={currentUser.firstName} required/>
                    <Form.Label>Last Name:</Form.Label>
                    <input className='form-control' id='lastName' name='lastName'   defaultValue={currentUser.lastName} required/>
                    <Form.Label>Email:</Form.Label>
                    <input className="form-control" id="email" name="email"  defaultValue={currentUser.email} />
                    <Form.Label>Account Type :</Form.Label>
                     <select
                        id="role"
                        required
                        value={user.role} // set the value of the select to user.role
                        onChange={(e) => setUser({ ...user, role: e.target.value })} // update the user.role state when the select changes
                        className="form-control"
                    >
                        <option selected="selected" value='buyer'>Buyer</option>
                        <option value='seller'>Seller</option>
                        </select>
                    <input className="form-control" id="role" name="role"  defaultValue={currentUser.role}/>
                    <Form.Label>Password:</Form.Label>
                    <input className="form-control" id="password" name="password"  defaultValue={currentUser.pass} />
                </Form.Group>
            </Row>
            
           
            <br />
            <br />

            
            <Button variant="danger"   type="submit" value="submit" >Update Profile </Button>
                    

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