import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import styled, { keyframes } from 'styled-components'
import { fadeInDown } from 'react-animations'
import image from '../images/image.png'

const Styles = styled.div`
.navbar {
    background-color : orange;
}
.navbar-brand, .navbar-nav .navbar-link {
    color : white;
    &:hover {
        color : white;
    }
    &:link {
        color: white;
    }
}`;
const FadeInDown = styled.div`animation: 2s ${keyframes`${fadeInDown}`} infinite`;
 const NavigationBar = () => {
    return (
        <div>
       <Styles>
           <Navbar expand="lg">
               <Navbar.Brand href="/"><FadeInDown><img src={image} /></FadeInDown></Navbar.Brand>
               <Navbar.Toggle aria-controls ="basic-navbar-nav" />
               <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
               <Nav className="nl-auto">
                   <Nav.Item><Nav.Link href="/"><h6>Home</h6></Nav.Link></Nav.Item>
                   <Nav.Item><Nav.Link href="/profile"><h6>Profil</h6></Nav.Link></Nav.Item>
                   <Nav.Item><Nav.Link href="/signin"><h6>Log Out</h6></Nav.Link></Nav.Item>
                   <Nav.Item><Nav.Link href="/signup"><h6>SignIn</h6></Nav.Link></Nav.Item>
                   <Nav.Item><Nav.Link href="/event"><h6>Event</h6></Nav.Link></Nav.Item>

               </Nav>
           </Navbar>
       </Styles>
       </div>
    );
}

export default NavigationBar

