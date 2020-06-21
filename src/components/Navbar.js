import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import styled from 'styled-components'

const Styles = styled.div`
.navbar {
    background-color :#147e26;
}
.navbar-brand, .navbar-nav .navbar-link {
    color : #222;
    &:hover {
        color : white;
    }
    &:link {
        color: white;
    }
}`;

 const NavigationBar = () => {
    return (
        <div>
       <Styles>
           <Navbar expand="lg">
               <Navbar.Brand href="/">IFFRE$NI</Navbar.Brand>
               <Navbar.Toggle aria-controls ="basic-navbar-nav" />
               <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
               <Nav className="nl-auto">
                   <Nav.Item><Nav.Link href="/">Accueil</Nav.Link></Nav.Item>
                   <Nav.Item><Nav.Link href="/profile">Profile</Nav.Link></Nav.Item>
                   <Nav.Item><Nav.Link href="/signin">Signin</Nav.Link></Nav.Item>
                   <Nav.Item><Nav.Link href="/signup">signup</Nav.Link></Nav.Item>

               </Nav>
           </Navbar>
       </Styles>
       </div>
    );
}

export default NavigationBar

