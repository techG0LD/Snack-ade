import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import { useParams, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";

function Profile() {
  const [user, setUser] = useState([""]);
  const params = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `http://localhost:4005/api/users/${JSON.stringify(params)}`
      );
      const json = await response.json();
      setUser(json);
    };
    fetchData();
  }, []);

  return (
    <Container>
      <h1>Account Profile</h1>
      <Row>
        <Col md={12}>
          <Card className="card-pro">
            <Card.Body>
              <Card.Title className="pro-title">{user.firstName} {user.lastName}</Card.Title>
              <Card.Subtitle className="mb-4 text-muted pro-sub">{user.role}</Card.Subtitle>
              <Form>
                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>Email</Form.Label>
                  <FormControl
                    type="email"
                    value={user.email}
                    readOnly
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPassword">
                  <Form.Label>Password</Form.Label>
                  <FormControl
                    
                    value={localStorage.getItem("password")}
                    readOnly
                  />
                </Form.Group>
              </Form>
            </Card.Body>
          </Card>
        
        
          <div className="w-100 mt-4">
            <Link to="/">
              <Button variant="dark" className="mx-3"> Home</Button>
            </Link>
            <Link to={`update/`}>
              <Button variant="info" className="mx-3">Update Profile</Button>
            </Link>
            
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Profile;