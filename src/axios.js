import axios from 'axios';

const getHeader = () => ({
	csrf: 'token',
	Authorization: `Bearer ${localStorage.getItem('access_token')}`,
});

const AxiosCall = async (method, url, data, isDownload = false) => {
	return await new Promise(function (resolve, error) {
		axios({
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
	});
};

class Axios {
	constructor() {
		let service = axios.create({
			headers: {
				csrf: 'token',
				Authorization: `Bearer ${localStorage.getItem('access_token')}`,
			},
		});
		// service.interceptors.response.use(this.handleSuccess, this.handleError);
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
