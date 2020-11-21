import { call, put, takeLatest } from 'redux-saga/effects';

// import { REQUESTMOVIELIST, reciveMovieList } from '../actions';
// import { fetchMovieList } from '../api';

// worker saga will be fired on REQUESTMOVIELIST action
function* getMovieList(action) {
	// try {
	// 	//do API call
	// 	const res = yield call(fetchMovieList);
	// 	yield put(reciveMovieList(res.data));
	// } catch (error) {
	// 	console.log(error);
	// }
}

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/

export default function* mySaga() {
	// yield takeLatest(REQUESTMOVIELIST, getMovieList);
}
