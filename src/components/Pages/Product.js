import {useState,useEffect, useContext} from 'react'
import Button from 'react-bootstrap/Button';
import { useParams,Link} from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { CurrentUser } from '../../contexts/CurrentUser';

export default function Product() {

   
    const { currentUser } = useContext(CurrentUser)
    const [snack, setSnack] = useState([''])
    const params = useParams();
    console.log(currentUser)
    useEffect(()=> {
        const fetchData = async () => {
            const response = await fetch(`http://localhost:4005/api/snacks/${JSON.stringify(params)}`)
            const json = await response.json()
            setSnack(json)
        }
        fetchData()
    }, [] )

    console.log(snack)

    let snackActions = null


    //check if snack's vendor is the currentuser's id
	if (currentUser?.user_id == snack.vendor_id) {
		snackActions = (
			<>
            <Link to={`update`}><Button className="mx-1" variant="info" size="lg" >Edit snack</Button></Link>
			</>
		)
	}

    

    return (
        <Container className="">
            <Row>
                <Col md={6}>
                    <Card className='card-page'>
                        <Card.Img className="product-img" src={snack.img} alt={snack.name} />
                        <Card.Body>
                            <Card.Title className='snack-title'>{snack.name}</Card.Title>
                            <Card.Text>{snack.desc}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} className="d-flex align-items-center justify-content-center"> 
                    <div className="w-75"> 
                        <ListGroup variant="flush">
                            <ListGroup.Item><strong>Category:</strong> {snack.cat}</ListGroup.Item>
                            <ListGroup.Item><strong>Price:</strong> {snack.price}</ListGroup.Item>
                        </ListGroup>
                        <div className="d-grid gap-2 mt-2">
                            <Link to={`#`}><Button className="mx-1" variant="warning" size="lg">Add to Cart</Button></Link>

                            {snackActions}
                            
                            <Link  to='/' ><Button  className="mx-1" variant="dark" size="lg">Home</Button></Link>
                            
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>

    )
}
