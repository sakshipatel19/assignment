import { takeEvery, call, put, all, takeLatest } from 'redux-saga/effects';

import * as actions from './actions';
import * as constants from './constants';
import services from '../../services/DashboardService';

function* watchDaterange() {
	yield takeEvery(constants.GET_DATE_RANGE_REQUEST, fetchDaterange);
}

function* fetchDaterange(action) {
	const { payload } = action;
	try {
		const { result, error } = yield call(services.fetchDaterange, payload);
		if (error) yield put(actions.errorDateRange(error));
		else yield put(actions.reciveDateRange(result));
	} catch (error) {
		yield put(actions.errorDateRange(error));
	}
}

function* watchChart1Data() {
	yield takeLatest(constants.GET_CHART1_DATA_REQUEST, fetchChart1Data);
}

function* fetchChart1Data(action) {
	const { payload } = action;
	try {
		const { result, error } = yield call(services.fetchChart1data, payload);
		if (error) yield put(actions.errorchart1data(error));
		else yield put(actions.recivechart1data(result));
	} catch (error) {
		yield put(actions.errorchart1data(error));
	}
}

function* watchChart2Data() {
	yield takeLatest(constants.GET_CHART2_DATA_REQUEST, fetchChart2Data);
}

function* fetchChart2Data(action) {
	const { payload } = action;
	try {
		const { result, error } = yield call(services.fetchChart2data, payload);
		if (error) yield put(actions.errorchart2data(error));
		else yield put(actions.recivechart2data(result));
	} catch (error) {
		yield put(actions.errorchart2data(error));
	}
}
export default function* rootSaga() {
	yield all([watchDaterange(), watchChart1Data(), watchChart2Data()]);
}
