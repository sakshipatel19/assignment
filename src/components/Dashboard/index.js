import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from './actions';

import Dashboard from './Dashboard';

const mapStateToProps = (store) => {
	return {
		...store.dashboard,
	};
};

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({ ...actions }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
