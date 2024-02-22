import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavbarComponent = () => {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="/" className='text-white'>
          The Most Awesome Movie Finder App EVER
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
          <Nav>
            <Nav.Link href="/" className='text-white'>Home</Nav.Link>
            <Nav.Link href="/about" className='text-white'>About Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarComponent;