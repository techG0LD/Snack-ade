import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Link} from 'react-router-dom'
import { CurrentUser } from "../../contexts/CurrentUser"




function AddSnack() {
    let { currentUser } = useContext(CurrentUser);


    return (
        <div> 
            
            <Form className="form" method="POST" action='http://localhost:4005/api/snacks'>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>Name:</Form.Label>
                        <input className='form-control' placeholder="Snack Name" id='name' name='name' required/>
                        <Form.Label>Category:</Form.Label>
                        <select
                        id="cat"
                        name="cat"
                        required
                        className="form-control"
                        >
                        <option selected="selected" value='candy'>Hard/soft Candy</option>
                        <option value='chocolate'>Chocolate</option>
                        <option  value='baked'>Baked Goods</option>
                        </select>
                        <Form.Label>Price:</Form.Label>
                        <input className="form-control" id="price" name="price" type='number' step='0.01' required />
                        <Form.Label>Image URL:</Form.Label>
                        <input className="form-control" id="img" name="img" required />
                        <Form.Label>Description:</Form.Label>
                        <input className="form-control" id="desc" name="desc" required/>

                        
                        <input type="hidden" id="vendor_id" name="vendor_id" value={currentUser.user_id} />
                    </Form.Group>
                </Row>
                
                
                <Button variant="success"   type="submit" value="submit" >Add Snack </Button>
                        

                <Link to='/'>
                    <Button className='addbutton' variant="dark"> Home </Button>
                </Link>

            </Form>     
        </div>
        )
    }

export default AddSnack;