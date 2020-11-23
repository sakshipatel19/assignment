import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Calender from '../Calender';
import BarGraph from '../charts/BarChart';
import PieChart from '../charts/PieChart';
import './Dashboard.css';

class Dashboard extends Component {
	state = { daterange: null };
	componentDidMount() {
		this.props.requestDateRange();
		this.props.requestchart1data();
		this.props.requestchart2data();
	}
	render() {
		console.log(this.props);
		const { chart1Data, daterange, chart2Data } = this.props;
		return (
			<div className='dashboard-container'>
				<div className='dashboard-header'>
					<div className='header'>DASHBOARD</div>
					<Calender daterange={daterange} />
				</div>
				<div className='chart-container'>
					<PieChart data={chart2Data.data} />
					<BarGraph data={chart1Data.data} />
				</div>
			</div>
		);
	}
}

export default withRouter(Dashboard);
