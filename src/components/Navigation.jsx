import React from "react";
import { withRouter } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";



class Navigation extends React.Component {

  render(){ return (
    <div className="navigation">
    <div className="container">
      <>
      <Navbar bg="warning" variant="light">
      <Navbar.Brand className="text-secondary" href="/">Gblizz</Navbar.Brand>
      <Nav className="mr-auto text-secondary">
      <Nav.Link href="/"><i class="fas fa-home text-secondary"></i><span class="text-secondary"> Home</span></Nav.Link>
      <Nav.Link href="/shop"><i class="fas fa-shopping-cart text-secondary"></i> <span class="text-secondary"> Shop</span></Nav.Link>
      <Nav.Link href="/reviews"><i class="fas fa-gamepad text-secondary"></i> <span class="text-secondary"> Professional Reviews </span></Nav.Link>
      <Nav.Link href="/signup"><i class="fas fa-user-plus text-secondary"></i> <span class="text-secondary"> Sign Up</span></Nav.Link>
      <Nav.Link href="/login"><i class="fas fa-sign-in-alt text-secondary"></i> <span class="text-secondary"> Login</span></Nav.Link>
      </Nav>
      <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2 text-secondary" />
      <Button variant="outline-warning text-secondary">Search <i class="fas fa-search"></i></Button>
      </Form>
      </Navbar>
      </>
    </div>
    </div>
  );}
}

export default withRouter(Navigation);
