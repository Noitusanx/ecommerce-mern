import React from 'react'
import {Navbar, Nav, Container} from 'react-bootstrap'

const Header = () => {
  return (
    <header>
        <Navbar bg='primary' variant='dark' expand='lg' collapseOnSelect>
            <Container>
                <Navbar.Brand href='#home'>
                    Shop
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className="ml-auto">
                        <Nav.Link>
                            <i className="fas fa-shopping-cart"></i> Cart</Nav.Link>
                        <Nav.Link>
                            <i className="fas fa-user"></i> Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </header>
  )
}

export default Header