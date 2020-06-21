import React from 'react'
import {Jumbotron as Jumbo , Container } from 'react-bootstrap'
import styled from 'styled-components'
import boat from '../images/img.jpg'

const Styles= styled.div`
.jumbo {
    background-image: url(${boat}) no-repeat fixed botton;
    background-size: cover;
    color: #62cf71;
    position: relative;
    z-index:-2;
 }
 .overlay {
     background-color: #62cf71;
     opacity: 0.6;
     position: absolute;
     top: 0;
     left: 0;
     botton:0;
     right: 0;
     z-index: -1;
 }
}`;

const Jumbotron = () => {
    return (
        <Styles>
            <Jumbo fluid className="jumbo">
                <div className="overlay"></div>
                <Container>
                    <h1>Bienvenue</h1>
                    <p>Nos objectifs</p>
                </Container>
            </Jumbo>
        </Styles>
    )
}

export default Jumbotron
