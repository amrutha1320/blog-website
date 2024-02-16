import React from 'react'
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  return (

    <>

      <Navbar bg="success" variant="dark">
        <Container>
          <Navbar.Brand >

          </Navbar.Brand>

          <Button type='button' bg="light" variant="light">

            <Link to="/add-blog" style={{ textDecoration: 'none' ,color:"black"}}>
              New Post
            </Link>
          </Button>
        </Container>
      </Navbar>
      <br />
    </>

  )
}

export default Header;




