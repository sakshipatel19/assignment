import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import BarGraph from '../charts/BarChart';
import PieChart from '../charts/PieChart';

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
				<PieChart data={chart2Data.data} />
				<BarGraph data={chart1Data.data} />
			</div>
		);
	}
}

export default withRouter(Dashboard);
