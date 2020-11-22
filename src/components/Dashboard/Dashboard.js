import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { fetchDaterange } from '../../api';
import { callDashboardService } from '../../services/callDashboardService';

class Dashboard extends Component {
	state = { daterange: null };
	componentDidMount() {
		callDashboardService();
		// console.log(fetchDaterange());
	}
	render() {
		console.log(this.props);
		return <div className='dashboard-container'>Dashboard</div>;
	}
}

export default withRouter(Dashboard);
