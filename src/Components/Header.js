import React, { Component } from 'react'
import { Navbar, NavDropdown, Form, FormControl, Button, Nav } from 'react-bootstrap'
import { Link } from "react-router-dom"

function Header ({countCartItems}) {
    return (
        <div>
            <Navbar bg="dark" variant={"dark"} expand="lg">
                <Navbar.Brand href="/">POS SYSTEM</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="mr-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/cart">Cart{' '}{countCartItems ? (
                            <button className="badge">{countCartItems}</button>) : ('')
                        }</Nav.Link>
                        <Nav.Link as={Link} to="/payment">Payment</Nav.Link>
                        <Nav.Link as={Link} to="/login">Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Search food"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
            </Navbar>
        </div>
    )
}

export default Header