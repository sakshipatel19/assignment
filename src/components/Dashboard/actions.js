import * as constants from './constants';

// date range actions

export const requestDateRange = () => {
	return {
		type: constants.GET_DATE_RANGE_REQUEST,
		payload: {
			organization: 'DemoTest',
			view: 'Auction',
		},
	};
};

export const reciveDateRange = (response) => ({
	type: constants.GET_DATE_RANGE_SUCCESS,
	response,
});

export const errorDateRange = (response) => ({
	type: constants.GET_DATE_RANGE_SUCCESS,
	response,
});

// chart1 data actions actions

export const requestchart1data = (payload) => ({
	type: constants.GET_CHART1_DATA_REQUEST,
	payload,
});

export const recivechart1data = (response) => ({
	type: constants.GET_CHART1_DATA_SUCCESS,
	response,
});

export const errorchart1data = (response) => ({
	type: constants.GET_CHART1_DATA_ERROR,
	response,
});

// chart2 data actions actions

export const requestchart2data = (payload) => ({
	type: constants.GET_CHART2_DATA_REQUEST,
	payload,
});

export const recivechart2data = (response) => ({
	type: constants.GET_CHART2_DATA_SUCCESS,
	response,
});

export const errorchart2data = (response) => ({
	type: constants.GET_CHART2_DATA_ERROR,
	response,
});
