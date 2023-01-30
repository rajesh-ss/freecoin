import "bootstrap/dist/css/bootstrap.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Navbar.css";
import logo from "../../assets/Group78.svg";

const MyNavbar = () => {
  return (
    <>
      {/* ------------------------------------------------- */}
      <Navbar className="nav navbar-expand-lg fixed-top" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">
            {" "}
            <img className="nav-logo" src={logo} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="my-2 my-lg-0 ms-auto toggleLink"
              style={{ maxHeight: "500px" }}
              navbarScroll
            >
              <Nav.Link
                className="nav-txt"
                id="abtUs"
                onClick={() => {
                  window.scrollTo(
                    0,
                    document.getElementById("about").offsetTop - 100
                  );
                }}
              >
                About Us
              </Nav.Link>
              <Nav.Link
                className="nav-txt"
                id="howWorks"
                onClick={() => {
                  window.scrollTo(
                    0,
                    document.getElementById("How it Works").offsetTop - 100
                  );
                }}
              >
                How it Works
              </Nav.Link>
              <Nav.Link
                className="nav-txt"
                id="ourNtw"
                onClick={() => {
                  window.scrollTo(
                    0,
                    document.getElementById("Our Network").offsetTop - 100
                  );
                }}
              >
                Our Network
              </Nav.Link>
              <button
                id="waitList"
                type="button"
                className="btn-waitlist nav-txt"
              >
                Join our Waitlist
              </button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default MyNavbar;
