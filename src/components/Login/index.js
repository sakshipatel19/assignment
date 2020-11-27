import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { authenticate } from '../../util/auth';
import { isEmail, isPassword } from '../../util/util';
import './Login.css';

class Login extends Component {
	state = {
		username: '',
		password: '',
	};

	signIn = () => {
		const { username, password } = this.state;
		if (isEmail(username) && isPassword(password)) {
			if (authenticate(username, password)) {
				setTimeout(() => this.props.history.push('/dashboard'), 3000);
			} else {
				this.setState({ password: '', username: '' });
			}
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
				<img src='../../sigmoid_logo.png' className='logo' />
				<div>SigView - Interactive Analytics Platform</div>
				<h2>Sign In</h2>
				<input
					type='text'
					className='input'
					value={username}
					placeholder='Enter your Username'
					onChange={(e) => this.setInputValue(e, 'username')}
				/>
				<input
					type='password'
					className='input'
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

export default withRouter(Login);
