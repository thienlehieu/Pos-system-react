import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Link } from 'react-router-dom';


const Signup = () => {
    function handleClick(e) {
		if (window.confirm("Please check your email to complete the registration!")){
			return true
		}
		else {
			e.preventDefault()
		}
	}
    return (
        <div className="loginbody">
        <div className="containersmall">
            <h3 className="mb-5 text-center title" style={{color:"#ff8080"}}>
                Restaurant POS System
            </h3>
            <h3 className="mb-5 text-center title" style={{color:"#ffb3b3"}}>Sign up</h3>
            <Form>
                <FormGroup>
                    <Label for="exampleEmail">Email</Label>
                    <Input
                        type="email"
                        name="email"
                        id="exampleEmail"
                        placeholder="Enter your email"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleEmail">User name</Label>
                    <Input
                        type="texy"
                        name="userName"
                        id="exampleUserName"
                        placeholder="Enter your name"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="examplePassword">Password</Label>
                    <Input
                        type="password"
                        name="password"
                        id="examplePassword"
                        placeholder="Enter your password"
                    />
				</FormGroup>
                <FormGroup>
                    <Label for="examplePassword">Password</Label>
                    <Input
                        type="password"
                        name="password"
                        id="exampleCfPassword"
                        placeholder="Enter your password again"
                    />
				</FormGroup>
            </Form>
            <div>
                <input type="checkbox" />
                <label> I agree with term and conditions</label>
            </div>
            <br></br>
            <Link to="/login">
                <Button className="btn btn-success" onClick={handleClick}>
                    Register
                </Button>
            </Link>
            <p className="forgot-password text-right">
            Already registered? <a href="/login">Login here</a>
            </p>
        </div>
    </div>
    )
}

export default Signup;