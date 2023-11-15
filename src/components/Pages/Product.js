// import {useState,useEffect} from 'react'
// import Button from 'react-bootstrap/Button';
// import { useParams,Link,useNavigate} from 'react-router-dom'

// export default function Product() {
//     const [snack, setSnack] = useState([''])
//     const params = useParams();

//     const navigate = useNavigate();

//     useEffect(()=> {
//         const fetchData = async () => {
//             const response = await fetch(`http://localhost:4005/api/snacks/${JSON.stringify(params)}`)
//             const json = await response.json()
//             setSnack(json)
//         }
//         fetchData()
//     }, [] )

//     if(!snack){
//         navigate('/error')
//     }



//     return (
//         <div className="recipePage">
//             <img src={snack.img} alt={snack.name} width="550px" height="650px" />
//         <div className="recipes">
//             <h1 className="recipesRec">snack</h1>
//             <ul className="recipeList">
//                     <li style={{paddingBottom:'25px'}}>
//                         <div>Name: {snack.name}</div>
//                         <div>Vendor: {snack.vendor}</div>
//                         <div>
//                             <br/>
//                             <ul>
//                                 <br/>
//                                 {snack.price} <br/>
//                                 {snack.desc} <br/>
//                             </ul>
//                         </div>
//                     </li>
//             </ul>

//             <div>
//                 <Link  to='/'><Button variant='danger'>Back to Home</Button></Link>
//             </div>



           
//             <div>
//                 <Link to={`update`}><Button variant='danger'>Update snack</Button></Link>
//             </div>
//             {/* <form method="POST" action={`/places/${data.id}?_method=PUT`}></form> */}

//         </div>
//         </div>

//     )
// }



import {useState,useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import { useParams,Link} from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

export default function Product() {
    const [snack, setSnack] = useState([''])
    const params = useParams();

    useEffect(()=> {
        const fetchData = async () => {
            const response = await fetch(`http://localhost:4005/api/snacks/${JSON.stringify(params)}`)
            const json = await response.json()
            setSnack(json)
        }
        fetchData()
    }, [] )



    return (
        <Container className="">
            <Row>
                <Col md={6}>
                    <Card>
                        <Card.Img src={snack.img} alt={snack.name} />
                        <Card.Body>
                            <Card.Title className='snack-title'>{snack.name}</Card.Title>
                            <Card.Text>{snack.desc}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} className="d-flex align-items-center justify-content-center"> 
                    <div className="w-75"> 
                        <ListGroup variant="flush">
                            <ListGroup.Item><strong>Vendor:</strong> {snack.vendor}</ListGroup.Item>
                            <ListGroup.Item><strong>Price:</strong> {snack.price}</ListGroup.Item>
                        </ListGroup>
                        <div className="d-grid gap-2">
                            <Link  to='/'><Button variant='danger'>Back to Home</Button></Link>
                            <Link to={`update`}><Button variant='danger'>Update snack</Button></Link>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>

    )
}
