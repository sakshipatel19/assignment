import axios from 'axios';

const getHeader = () => ({
	csrf: 'token',
	'x-auth-token': `${localStorage.getItem('token')}`,
});

const AxiosCall = async (method, url, data) => {
	return await axios({
		method: method,
		url: url,
		responseType: 'json',
		data: data,
		headers: getHeader(),
	})
		.then((response) => response.data)
		.catch((err) => err);
};

class Axios {
	constructor() {
		let service = axios.create({
			headers: {
				csrf: 'token',
				'x-auth-token': `${localStorage.getItem('token')}`,
			},
		});
		this.service = service;
	}

	get = async (path) => {
		return await AxiosCall('GET', path);
	};

	post = async (path, payload) => {
		return await AxiosCall('POST', path, payload);
	};
}

export default new Axios();
