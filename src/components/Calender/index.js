import React, { Component } from 'react';
import moment from 'moment';

import './Calender.css';
import DatePicker from './DatePicker';

class Calender extends Component {
	state = { showCalender: false };
	showCalender = () => {
		this.setState({ showCalender: true });
	};
	handleDateCancel = () => {
		this.setState({ showCalender: false });
	};
	handleDateSelect = (daterange) => {
		let startDate = moment(daterange[0]).unix() * 1000;
		let endDate = moment(daterange[1]).unix() * 1000;
		let selectedDateRange = {
			startDate: startDate.toString(),
			endDate: endDate.toString(),
		};
		console.log(selectedDateRange);
		this.props.onDateRangeSelect(selectedDateRange);
	};
	render() {
		const { showCalender } = this.state;
		const { daterange } = this.props;
		return (
			<div className='date-range-picker-component-container calender-container'>
				<i
					className='fa fa fa-calendar calender-icon'
					onClick={this.showCalender}
				></i>
				{showCalender && (
					<DatePicker
						daterange={daterange}
						calenderClass='blue'
						handleDateCancel={this.handleDateCancel}
						handleDateSelect={this.handleDateSelect}
					/>
				)}
			</div>
		);
	}
}

export default Calender;
