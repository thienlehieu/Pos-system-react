import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Link } from 'react-router-dom';

const ResetPw = () => {
    function handleClick(e) {
		if (window.confirm("Please check your email to change the new password!")){
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
            </Form>
            <Link to="/login">
                <Button className="btn btn-warning" onClick={handleClick}>
                    Reset password
                </Button>
            </Link>
            <p className="forgot-password text-right">
            Don't have an account? <a href="/signup">Register Now</a>
            </p>
            <p className="forgot-password text-right">
            Already registered? <a href="/login">Login here</a>
            </p>
        </div>
    </div>
    )
}

export default ResetPw;