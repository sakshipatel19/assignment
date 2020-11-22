import axios from 'axios';

export const authenticate = async (username, password) => {
	axios
		.post('https://sigviewauth.sigmoid.io/signIn', {
			email: username,
			password: password,
			rememberMe: true,
		})
		.then((res) => {
			localStorage.setItem('token', res.data.token);
			return true;
		})
		.catch((error) => {
			console.log(error);
			return false;
		});
};
