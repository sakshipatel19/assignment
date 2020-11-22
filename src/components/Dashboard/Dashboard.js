import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { fetchDaterange } from '../../api';

class Dashboard extends Component {
	state = { daterange: null };
	componentDidMount() {
		// callDashboardService(this.props);
		console.log(fetchDaterange());
	}
	render() {
		return <div className='dashboard-container'>Dashboard</div>;
	}
}

export default withRouter(Dashboard);
