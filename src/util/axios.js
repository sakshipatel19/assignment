import axios from 'axios';

const getHeader = () => ({
	csrf: 'token',
	'x-auth-token': `${localStorage.getItem('token')}`,
});

const AxiosCall = async (method, url, data, isDownload = false) => {
	return await axios({
		method: method,
		url: url,
		responseType: 'json',
		data: data,
		headers: getHeader(),
	})
		.then((response) => {
			if (response.status === 200) {
				const result = response.data;
				if (isDownload) {
					resolve({ result: response });
				}

				resolve({ result });
			}

			error({ error: { status: response.status } });
		})
		.catch((err) => {
			error({ error: err });
		});
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
