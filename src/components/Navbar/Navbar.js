import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import classes from './Navbar.css';
import Button from 'react-bootstrap/Button';
import logo from '../../assets/Group78.svg';



const MyNavbar = ()=>{




    return (
        <>

        {/* <Navbar className='nav' expand="lg">
        <Container>
          <Navbar.Brand className= 'nav-txt'> <img className='nav-logo' src={logo}/></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link  className= 'nav-txt' href="#home">About Us</Nav.Link>
            <Nav.Link className= 'nav-txt' href="#features">How it Works</Nav.Link>
            <Nav.Link className= 'nav-txt' href="#pricing">Our Vision</Nav.Link>
            <Nav.Link className= 'nav-txt' href="#pricing">Our network</Nav.Link>
          </Nav>
        </Container>
      </Navbar> */}
  {/* ------------------------------------------------- */}
      <Navbar className='nav navbar-expand-lg fixed-top' expand="lg">
      <Container fluid>
        <Navbar.Brand href="#"> <img className='nav-logo' src={logo}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
          
            className="my-2 my-lg-0 ms-auto toggleLink"
            style={{ maxHeight: '500px' }}
            navbarScroll>
{/* 
            <Nav.Link  className= 'nav-txt ' href="#home">About Us</Nav.Link> */}
            <Nav.Link className= 'nav-txt' href="#How it Works">How it Works</Nav.Link>
            <Nav.Link className= 'nav-txt' href="#Our Vision">Our Vision</Nav.Link>
            <Nav.Link className= 'nav-txt' href="#Our network">Our network</Nav.Link>
            <button type="button" className="btn-waitlist nav-txt">Join our waitlist</button>
            
          </Nav>
 
        </Navbar.Collapse>
      </Container>
    </Navbar>

   </>
   
      );
    }

export default MyNavbar;