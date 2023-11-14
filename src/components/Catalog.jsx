// import {useState, useEffect} from 'react'
// import { Link } from 'react-router-dom'

// export default function Catalog() {
//     const [snacks,setSnacks] = useState([])

//     useEffect(() => {
//         const fetchData = async () => {
//             const response = await fetch('http://localhost:4005/api/snacks/')
//             const json = await response.json()
//             setSnacks(json)
//         }
//         fetchData()
//     }, [])


//     return (
//         <div>
//             <h1>Catalog</h1>
//             <ul>
//                 {snacks.map((snack,index) => (
//                     <li key={index} style = {{padding: '30px'}}>
//                         {/* <Link to={`/snacks/${snack.snack_id}`}> */}
//                         <Link to={`/snacks/${snack.name}`}>
//                         <div>{snack.name}</div>
//                         <div>{snack.vendor}</div>
//                         <img src={snack.img} alt='Picture of snack'/>
//                         <div>{snack.price}</div>
//                         <div>{snack.desc}</div>
//                         </Link>
                        
//                     </li>
//                 ))}
//             </ul>
//         </div>
        
//     )
// }



import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// Import React Bootstrap components
import { Container, Row, Col, Card, Button } from "react-bootstrap";

export default function Catalog() {
  const [snacks, setSnacks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:4005/api/snacks/");
      const json = await response.json();
      setSnacks(json);
    };
    fetchData();
  }, []);

  return (
    <Container>
      <h1>Catalog</h1>
      <Row>
        {snacks.map((snack, index) => (
          <Col key={index} sm={6} md={4} lg={3} className="mb-4">
            <Card>
              <Card.Img variant="top" src={snack.img} alt="Picture of snack" />
              <Card.Body>
                <Card.Title>{snack.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {snack.vendor}
                </Card.Subtitle>
                <Card.Text>{snack.desc}</Card.Text>
                <Card.Text className="font-weight-bold">
                  ${snack.price}
                </Card.Text>
                <Link to={`/snacks/${snack.name}`}>
                  <Button variant="primary">View Details</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
