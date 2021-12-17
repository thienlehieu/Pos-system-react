import React from 'react';
import { Button, FormGroup, Label, Input } from 'reactstrap';

import { Link } from 'react-router-dom';

const Login = ({isLogin, setLogin}) => {
	function handleClick(e) {
		if (window.confirm("Are you sure you want to sign out")){
			setLogin(false)
		}
		else {
			e.preventDefault()
		}
	}
	return (
		isLogin ?
		<div className="loginbody"> 
		<form>
			<h3 className="mb-4 text-center">User information</h3>
			<FormGroup>
				<Label>User name</Label>
				<Input
					type="text"
					placeholder="Thien Le"
					disabled={true}
				/>
			</FormGroup>
			<FormGroup>
				<Label>Email</Label>
				<Input
					type="text"
					placeholder="thienle@gmail.com"
					disabled={true}
				/>
			</FormGroup>
			<FormGroup>
				<Label>Phone number</Label>
				<Input
					type="text"
					placeholder="0813931939"
					disabled={true}
				/>
			</FormGroup>
			<FormGroup>
				<Label>Role</Label>
				<Input
					type="text"
					placeholder="Customer"
					disabled={true}
				/>
			</FormGroup>
			<button className="btn btn-danger" onClick={handleClick}>Sign out</button>
		</form>
		</div>
		:
		<div className="loginbody">
			<form>
				<h3 className="mb-5 text-center title" style={{color:"#ff8080"}}>
					Restaurant POS System
				</h3>
				<h3 className="mb-5 text-center title" style={{color:"#ffb3b3"}}>Sign in</h3>
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
					<Label for="examplePassword">Password</Label>
					<Input
						type="password"
						name="password"
						id="examplePassword"
						placeholder="Enter your password"
					/>
				</FormGroup>
				<div>
					<input type="checkbox" />
					<label> Remember me</label>
				</div>
				<br></br>
				<Link to="/">
					<Button className="btn btn-success" onClick={() => setLogin(true)}>
						Sign in
					</Button>
				</Link>
			</form>
			<p className="forgot-password text-right">
				Don't have an account? <a href="/signup">Register Now</a>
			</p>
			<p className="forgot-password text-right">
				Forgot <a href="/resetpw">password?</a>
			</p>
		</div>
	);
};

export default Login;