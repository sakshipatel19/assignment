import { all } from 'redux-saga/effects';

import _watchDashboardActions from '../src/components/Dashboard/saga';

export default function* rootSaga() {
	yield all([_watchDashboardActions]);
}
