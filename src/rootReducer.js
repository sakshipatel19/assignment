import { combineReducers } from 'redux';

import dashboardReducer from '../src/components/Dashboard/reducer';

const rootReducer = combineReducers({ dashboard: dashboardReducer });

export default rootReducer;
