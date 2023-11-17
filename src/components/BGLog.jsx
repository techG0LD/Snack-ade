import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { Container, Row, Col, Card, Button } from "react-bootstrap";

export default function BG_log() {
  const [snacks, setSnacks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:4005/api/snacks/demo");
      const json = await response.json();
      setSnacks(json);
    };
    fetchData();
  }, []);

  return (
    <Container>
      
      <Row>
        {snacks.map((snack, index) => (
          <Col key={index} sm={6} md={4} lg={3} className="mb-4">
            <Card className="card h-100 card-page">
              <Card.Img className="" variant="top" src={snack.img} alt="Picture of snack" />
              <Card.Body>
                <Card.Title className="snack-title">{snack.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {snack.vendor}
                </Card.Subtitle>
                <Card.Text>{snack.desc}</Card.Text>
                <Card.Text className="font-weight-bold">
                  ${snack.price}
                </Card.Text>
                <Link to={`/snacks/${snack.name}`}>
                  <Button className="navbar-custom" ><strong>View Snack</strong></Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}