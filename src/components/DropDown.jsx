import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';

function DropDown() {
  return(
    <Navbar className="drop">
      <Container  >
        <Navbar.Brand href="#home" className="drop" >Isa's World!</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-dark-example" />
        <Navbar.Collapse id="navbar-dark-example">
          <Nav >
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Isa Likes..."
              menuVariant=""
            >
              <NavDropdown.Item href="#action/3.1">Kittens</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Pokemon</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Books</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default DropDown;