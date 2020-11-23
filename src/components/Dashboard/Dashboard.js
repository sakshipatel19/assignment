import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Dashboard extends Component {
	state = { daterange: null };
	componentDidMount() {
		this.props.requestDateRange();
		this.props.requestchart1data();
		this.props.requestchart2data();
	}
	render() {
		console.log(this.props);
		return <div className='dashboard-container'>Dashboard</div>;
	}
}

export default withRouter(Dashboard);
