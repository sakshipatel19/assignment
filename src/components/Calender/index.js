import React, { Component } from 'react';

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
	handleDateSelect = () => {};
	render() {
		const { showCalender } = this.state;
		const { daterange } = this.props;
		console.log(daterange);
		return (
			<div className='calender-container'>
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
