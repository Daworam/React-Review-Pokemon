import { Link } from "react-router-dom"
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import SearchBar from "./SearchBar";

const NavBar = () =>{
  return (
    <>
      
            
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Review</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/pokemon">
              Pokemon
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default NavBar