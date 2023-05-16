import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap';
import { FaArrowCircleRight, FaMoon } from "react-icons/fa";
import "./navbar.css"
import { useDispatch, useSelector } from 'react-redux';


export const Navbarr = () => {

    let user = useSelector(store => store.userSection.cu)

    let dispatch = useDispatch()
    

    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="grey" variant="black" className='navbarmain'>
                <Container>
                    <Navbar.Brand href="/" className='col logo'> <img src="logo.png" alt="" /> </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">

                        <Nav className='col col-xl-8 col-lg-8 navLink'>
                            <Nav.Link href="/">Sign in</Nav.Link>
                            <Nav.Link href="/services">Services</Nav.Link>
                            <Nav.Link href="/">Terms</Nav.Link>
                            <Nav.Link href="/signup">Sign up</Nav.Link>
                            <Nav.Link href="/blogs">Blog</Nav.Link>
                            <Nav.Link href="/faq">FAQ</Nav.Link>
                        </Nav>
                        <Nav className='col navLink2'>
                            {user.email == undefined &&
                                <Nav.Link href="/signup">
                                    <div className='nav_signup'>
                                        <button>Sign up <span><FaArrowCircleRight /></span></button>
                                    </div>
                                </Nav.Link>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
