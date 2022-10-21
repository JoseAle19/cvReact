import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./home.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const App = () => {
  return (
    <div className="home">
      <Navbar bg="dark" expand="lg">
        <Container>
          <Navbar className="tittle">Curriculum</Navbar>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="profile" href="profile">
                Perfil
              </Nav.Link>
              <Nav.Link className="hobbies" href="hobbies">
                Hobbies
              </Nav.Link>
    
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="homeImage">
        <Container fluid="md" className="containerData">
          <Row className="datos">
            <Col className="colData">
              <h1>Hola,</h1>
              <hr />
              <h2>Soy jose alejandro</h2>
              <hr />
              <h3>Estudiante en ingenieria en sistemas computacionales</h3>
              <hr />
              <h3>Vivo en comitan de dominguez chiapas, mexico</h3>
              <hr />
            </Col>
            <Col className="colData">
              <img
                className="image"
                src="https://img.mipon.org/wp-content/uploads/2019/04/05173028/Goku-kid-capsule-saiyan-armor.jpg"
                alt="imagen"
              />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};
