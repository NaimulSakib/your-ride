import React, { useContext } from "react";
import "./Navbar.css";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link, useParams } from "react-router-dom";
import { userContext } from "../../App";
const Navabar = () => {
  const [loggedInUser,setLoggedInUser] = useContext(userContext);
  const {name,email} = loggedInUser;
  let { id } = useParams();
  return (
    <Navbar className="bg-transparent navbar-style" expand="lg">
      <Container>
        <Navbar.Brand href="#home" className="navbar-brand-style">
          <Link className='link' to='/'>Your Ride 🏍️</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link className="primary" href="">
              <Link className="link" to="/">Home</Link>
            </Nav.Link>
            <Nav.Link href="#link"><Link className="link" to='/'>Destination</Link></Nav.Link>
            <Nav.Link href="#link"><Link className="link" to='/'>Blog</Link></Nav.Link>
            <Nav.Link href="#link"><Link className="link" to='/'>Contact</Link></Nav.Link>
            {
              email ? ( <> <span className="p-2 text-danger"> {name || email} </span>
                <Button variant="danger" className="nav-btnp">
                <Link className="link text-white" onClick={() => setLoggedInUser({})}>Log out</Link>
                </Button>    
               </>
              ) : (
                <Button variant="danger" className="nav-btnp">
                <Link className="link text-white" to='/login'>Log In</Link>
                </Button>
              )
            }
            {/* <Button variant="danger" className="nav-btnp">
            <Link className="link text-white" to='/login'>Log In</Link>
            </Button> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navabar;
