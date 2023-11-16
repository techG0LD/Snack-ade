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
                    <Form.Label>Category:</Form.Label>
                    <select
                        id="cat"
                        name="cat"
                        required
                        className="form-control"
                        value={snack.cat}
                        onChange={(e) => setSnack({ ...snack, cat: e.target.value })}
                        >
                        <option  value='candy'>Hard/soft Candy</option>
                        <option value='chocolate'>Chocolate</option>
                        <option  value='baked'>Baked Goods</option>
                        </select>
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
                    
            <form method = "POST" action={`http://localhost:4005/api/snacks/${snack.name}?_method=DELETE`}>
                <Button type="submit" className="btn btn-danger">Delete Snack</Button>
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

export default UpdateSnack;