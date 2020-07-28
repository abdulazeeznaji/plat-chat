import React, {Component} from "react";
import Card from "@material-ui/core/Card";
import FormCntrl from "@material-ui/core/FormControl"
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import Button from "@material-ui/core/Button";
import axios from 'axios';
import styled from 'styled-components';
import {SERVER_URL} from '../utils/config';
import { browserHistory as history } from 'react-router';


const FormControl = styled(FormCntrl)`
	margin: 10px;
`;


class SignUp extends Component {
	constructor(props) {
		super(props);
		this.state = {user_name: '', email: '', password: ''};
	}

	handleChange = (event) => {
		this.setState({ [event.target.name]: event.target.value })
	};

	handleOnSubmit = (event) => {
		event.preventDefault();
		fetch(`${SERVER_URL}/users/users/`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(this.state)
		})
			.then(res => res.json())
			.then(json => {
				localStorage.setItem('token', json.token);
				this.setState({
					logged_in: true,
					username: json.username
				});
				history.push('/')
			});


	};

	render() {
		return (
			<Card square style={{ padding: 30 }}>
				<form onSubmit={this.handleOnSubmit} autoComplete="off">
					<FormControl style={{ display: 'block', margin: 10 }}>
						<InputLabel htmlFor="first_name"> First Name </InputLabel>
						<Input name='user_name' id="first_name" style={{ width: 400 }} value={this.state.first_name} onChange={this.handleChange}/>
					</FormControl>

					<FormControl style={{ display: 'block', margin: 10 }}>
						<InputLabel htmlFor="email">Email</InputLabel>
						<Input name='email' type="email" id="email" style={{ width: 400 }} value={this.state.email} onChange={this.handleChange}/>
					</FormControl>
					<FormControl style={{ display: 'block', margin: 10 }}>
						<InputLabel htmlFor="password">Password</InputLabel>
						<Input name='password' type="password" autoComplete="off" id="password" style={{ width: 400 }} value={this.state.password} onChange={this.handleChange}/>
					</FormControl>
					<Button type="submit" variant="outlined" style={{ margin: 10 }}>Create account</Button>
				</form>
			</Card>
		);
	}

}

export default SignUp;