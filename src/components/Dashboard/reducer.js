import * as constants from './constants';

const defaultState = {
	daterange: {
		fetching: null,
		error: null,
		data: null,
	},
	chart1Data: {
		fetching: null,
		error: null,
		data: null,
	},
	chart2Data: {
		fetching: null,
		error: null,
		data: null,
	},
};

const dashboardReducer = (state = defaultState, action) => {
	switch (action.type) {
		case constants.GET_DATE_RANGE_REQUEST:
			return {
				...state,
				daterange: { fetching: true, error: null, data: null },
			};

		case constants.GET_DATE_RANGE_SUCCESS:
			return {
				...state,
				daterange: { fetching: false, error: null, data: action.response },
			};

		case constants.GET_DATE_RANGE_ERROR:
			return {
				...state,
				daterange: { fetching: false, error: action.response, data: null },
			};
		case constants.GET_CHART1_DATA_REQUEST:
			return {
				...state,
				chart1Data: { fetching: true, error: null, data: null },
			};

		case constants.GET_CHART1_DATA_SUCCESS:
			return {
				...state,
				chart1Data: { fetching: false, error: null, data: action.response },
			};

		case constants.GET_CHART1_DATA_ERROR:
			return {
				...state,
				chart1Data: { fetching: false, error: action.response, data: null },
			};

		case constants.GET_CHART2_DATA_REQUEST:
			return {
				...state,
				chart2Data: { fetching: true, error: null, data: null },
			};

		case constants.GET_CHART2_DATA_SUCCESS:
			return {
				...state,
				chart2Data: { fetching: false, error: null, data: action.response },
			};

		case constants.GET_CHART2_DATA_ERROR:
			return {
				...state,
				chart2Data: { fetching: false, error: action.response, data: null },
			};

		default:
			return state;
	}
};

export default dashboardReducer;
