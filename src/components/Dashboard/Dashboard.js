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
	refreshdata = () => {
		this.props.requestchart1data();
		this.props.requestchart2data();
	};

	onDateRangeSelect = (dateRange) => {
		this.props.requestchart1data(dateRange);
		this.props.requestchart2data(dateRange);
	};
	render() {
		const { chart1Data, daterange, chart2Data } = this.props;
		return (
			<div className='dashboard-container'>
				<div className='dashboard-header'>
					<div className='header'>DASHBOARD</div>
					<Calender
						daterange={daterange.data}
						onDateRangeSelect={this.onDateRangeSelect}
					/>
					<div className='refresh' onClick={this.refreshdata}>
						<i className='fa fa fa-refresh'></i>
					</div>
				</div>
				<div className='chart-container'>
					<PieChart data={chart2Data} />
					<BarGraph data={chart1Data} />
				</div>
			</div>
		);
	}
}

export default withRouter(Dashboard);
