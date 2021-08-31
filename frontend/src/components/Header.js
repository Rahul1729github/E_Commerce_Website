import React from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
const Header = () => {
  return (
    <header>
     
      <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
        <Container>
          <LinkContainer to='/'>
          <Navbar.Brand >Ecommerce</Navbar.Brand>
          </LinkContainer>
            
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='me-auto'>              
            </Nav>
            <Nav className='ml-auto'>
              <LinkContainer to='/cart'>
              <Nav.Link ><i className='fas fa-shopping-cart'></i>Cart</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/login'>
              <Nav.Link ><i className='fas fa-user'></i>Sign in</Nav.Link>
              </LinkContainer>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
