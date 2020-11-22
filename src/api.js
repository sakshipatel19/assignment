import Axios from './util/axios';

const data = {
	_id: 'dashboard1516252439345',
	emailId: 'candidate@sigmoid.com',
	orgViewReq: {
		organization: 'DemoTest',
		view: 'Auction',
	},
	chartObject: {
		metadata: {
			title: 'chartobject:1516252439345',
			img_thumbnail: '../img/chart.png',
			chartType: 'table',
			dataLimit: 50,
		},
		requestParam: {
			granularity: 'hour',
			timeZone: {
				name: 'UTC (+00:00)',
				location: 'UTC',
			},
			dateRange: {
				startDate: '1493337600000',
				endDate: '1493510400000',
			},
			xAxis: ['D044'],
			yAxis: ['M002'],
			approxCountDistinct: [],
			specialCalculation: [],
			filter: [],
			orderBy: {
				metricOrdByList: [
					{
						id: 'M002',
						desc: true,
					},
				],
			},
			percentCalList: [],
		},
	},
};
export const fetchDaterange = async (payload) => {
	return await Axios.post(
		'https://sigviewauth.sigmoid.io/api/v1/getDateRange',
		{ organization: 'DemoTest', view: 'Auction' }
	)
		.then((res) => {
			console.log(res.data);
			return res.data;
		})
		.catch((error) => {
			console.log(error);
		});
};

// export const fetchChart1data = async (payload) => {
// 	return await axios
// 		.post('https://sigviewauth.sigmoid.io/api/v1/getData', {
// 			data: payload,
// 			header: getHeader(),
// 		})
// 		.then((res) => console.log(res.data))
// 		.catch((error) => console.log(error));
// };

// export const fetchChart2data = async (payload) => {
// 	return await axios
// 		.post('https://sigview.sigmoid.io/api/v1/getData', {
// 			data: payload,
// 			header: getHeader(),
// 		})
// 		.then((res) => console.log(res.data))
// 		.catch((error) => console.log(error));
// };
