import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Link, useParams} from 'react-router-dom'
import {useState,useEffect} from 'react'


function UpdateSnack() {
    const [snack, setSnack] = useState([''])
    const params = useParams();
    console.log((JSON.stringify(params)))

    useEffect(()=> {
        const fetchData = async () => {
            const response = await fetch(`http://localhost:4005/api/snacks/${JSON.stringify(params)}`)
            const json = await response.json()
            setSnack(json)
        }
        fetchData()
    }, [] )

  return (
    <div> 
        <Form className="form" method="POST" action={`http://localhost:4005/api/snacks/${snack.name}?_method=PUT`}>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>Name:</Form.Label>
                    <input className='form-control' id='name' name='name'   defaultValue={snack.name} required/>
                    <Form.Label>Vendor:</Form.Label>
                    <input className="form-control" id="vendor" name="vendor"  defaultValue={snack.vendor} />
                    <Form.Label>Price:</Form.Label>
                    <input className="form-control" id="price" name="price"  defaultValue={snack.price}/>
                    <Form.Label>Image URL:</Form.Label>
                    <input className="form-control" id="img" name="img" defaultValue={snack.img}/>
                    <Form.Label>Description:</Form.Label>
                    <input className="form-control" id="desc" name="desc"  defaultValue={snack.desc} />
                </Form.Group>
            </Row>
            
           
            <br />
            <br />

            
            <Button variant="danger"   type="submit" value="submit" >Update Snack </Button>
                    

            <Link to='/'>
            <Button variant="danger">
                Back to Home
            </Button>
            </Link>
        </Form>     
    </div>
    )
}

export default UpdateSnack;