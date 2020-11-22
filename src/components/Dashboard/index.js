import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Dashboard extends Component {
	componentDidMount() {}
	render() {
		return <div className='dashboard-container'>Dashboard</div>;
	}
}

export default withRouter(Dashboard);
