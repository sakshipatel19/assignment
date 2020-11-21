import React, { Component } from 'react';

import { authenticate } from '../../auth';
import { isEmail, isPassword } from '../../util';
import './Login.css';

class Login extends Component {
	state = {
		username: '',
		password: '',
	};

	signIn = () => {
		const { username, password } = this.state;
		console.log(isEmail(username), isPassword(password));
		if (isEmail(username) && isPassword(password)) {
			authenticate(username, password);
		} else {
			this.setState({ password: '', username: '' });
		}
	};

	setInputValue = (e, input) => {
		this.setState({ [input]: e.target.value });
	};

	render() {
		const { username, password } = this.state;
		return (
			<div className='login-container'>
				<input
					type='text'
					value={username}
					placeholder='Enter your Username'
					onChange={(e) => this.setInputValue(e, 'username')}
				/>
				<input
					type='password'
					value={password}
					placeholder='Enter your Passwod'
					onChange={(e) => this.setInputValue(e, 'password')}
				/>
				<button className='sign-in-btn' onClick={this.signIn}>
					Sign In
				</button>
			</div>
		);
	}
}

export default Login;
