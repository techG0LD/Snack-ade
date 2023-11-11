import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Link} from 'react-router-dom'


function AddSnack() {
    return (
        <div> 
            
            <Form className="form" method="POST" action='http://localhost:4005/api/snacks'>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>Name:</Form.Label>
                        <input className='form-control' placeholder="Snack Name" id='name' name='name' required/>
                        <Form.Label>Vendor:</Form.Label>
                        <input className="form-control" id="vendor" name="vendor" required />
                        <Form.Label>Price:</Form.Label>
                        <input className="form-control" id="price" name="price" type= 'number' required />
                        <Form.Label>Image URL:</Form.Label>
                        <input className="form-control" id="img" name="img" required />
                        <Form.Label>Description:</Form.Label>
                        <input className="form-control" id="desc" name="desc" required/>
                        
                    </Form.Group>
                </Row>
                
                
                <Button variant="danger"   type="submit" value="submit" >Add Snack </Button>
                        

                <Link to='/'>
                    <Button className='addbutton' variant="danger"> Back to Home </Button>
                </Link>

            </Form>     
        </div>
        )
    }

export default AddSnack;