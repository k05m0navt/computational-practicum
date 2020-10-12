import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

function NavBar(props) {
    return(
        <div className='nav_bar'>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand>{props.logo}</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href={props.homeLink}>{props.homeText}</Nav.Link>
                        <Nav.Link href={props.errorLink}>{props.errorText}</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default NavBar;