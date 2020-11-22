import Axios from '../util/axios';

const commonPayload = {
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

class DashboardService {
	fetchDaterange = async (payload) => {
		return await Axios.post(
			'https://sigviewauth.sigmoid.io/api/v1/getDateRange',
			payload
		);
	};

	fetchChart1data = async (payload) => {
		const body = { ...commonPayload };
		return await Axios.post(
			'https://sigviewauth.sigmoid.io/api/v1/getData',
			body
		);
	};

	fetchChart2data = async (payload) => {
		const body = { ...commonPayload };
		return await Axios.post('https://sigview.sigmoid.io/api/v1/getData', body);
	};
}

export default new DashboardService();
