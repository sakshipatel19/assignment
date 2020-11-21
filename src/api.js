import axios from 'axios';

const getHeader = () => {
	return {
		'x-auth-token': `${localStorage.getItem('access_token')}`,
	};
};
export const fetchDaterange = async (payload) => {
	return await axios
		.post('https://sigviewauth.sigmoid.io/api/v1/getDateRange', {
			data: payload,
			header: getHeader(),
		})
		.then((res) => console.log(res.data))
		.error((error) => console.log(error));
};

export const fetchChart1data = async (payload) => {
	return await axios
		.post('https://sigviewauth.sigmoid.io/api/v1/getData', {
			data: payload,
			header: getHeader(),
		})
		.then((res) => console.log(res.data))
		.error((error) => console.log(error));
};

export const fetchChart2data = async (payload) => {
	return await axios
		.post('https://sigview.sigmoid.io/api/v1/getData', {
			data: payload,
			header: getHeader(),
		})
		.then((res) => console.log(res.data))
		.error((error) => console.log(error));
};
