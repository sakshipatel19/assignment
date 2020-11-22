import { store } from '../index';
import {
	requestchart1data,
	requestDateRange,
	requestchart2data,
} from '../components/Dashboard/actions';

export const callDashboardService = (payload) => {
	store.dispatch(requestDateRange(payload));
	store.dispatch(requestchart1data(payload));
	store.dispatch(requestchart2data(payload));
};
