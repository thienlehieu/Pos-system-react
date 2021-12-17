import React, {useState} from 'react'
import { Navbar, Form, FormControl, Button, Nav } from 'react-bootstrap'
import { Link } from "react-router-dom"

function Header ({countCartItems, isLogin, items, setMenuItems,setMenuSearchItems}) {
    const [seacchVal, setSearchVal] = useState("")

    function handleChange(event) {
        setSearchVal(event.target.value)
    }
    function filterSearchItems (val) {
        console.log(val)
        if (val !== ""){
            const newItems = items.filter((item) => item.title.toLowerCase().indexOf(val.toLowerCase()) !== -1) 
            setMenuItems(newItems)
            setMenuSearchItems(newItems)
        }
        else{
            setMenuItems(items)
            setMenuSearchItems(items)
        }
    }

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
                        <Nav.Link as={Link} to="/login">{isLogin ? "Profile": "Sign in"}</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Form className="d-flex" onSubmit={() => filterSearchItems(seacchVal)}>
                    <FormControl
                        type="search"
                        placeholder="Search food"
                        onChange={handleChange}
                        className="me-2"
                        aria-label="Search"
                    />
                    <Button variant="outline-success" onClick={() => filterSearchItems(seacchVal)}>Search</Button>
                </Form>
            </Navbar>
        </div>
    )
}

export default Header