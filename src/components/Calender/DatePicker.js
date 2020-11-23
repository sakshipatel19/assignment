import React, { Component } from 'react';
import { DateRangePicker } from '@blueprintjs/datetime';

import 'normalize.css';
import '@blueprintjs/datetime/lib/css/blueprint-datetime.css';
import '@blueprintjs/core/lib/css/blueprint.css';
import './DatePicker.css';

const validateSelect = (dateRange) => {
	if (dateRange === null) return false;
	return true;
};
class DatePicker extends Component {
	state = {
		daterange: this.props.daterange,
	};
	handleRangeChange = (daterange) => {
		// const range =
		// 	(this.props.handleRangeChange &&
		// 		this.props.handleRangeChange(dateRange)) ||
		// 	dateRange;

		this.setState({
			daterange: daterange,
		});
	};
	handleDateCancel = () => {
		this.props.handleDateCancel();
	};
	handleDateSelect = () => {
		const { daterange } = this.state;
		if (validateSelect(daterange)) this.props.handleDateSelect(daterange);
	};
	render() {
		const { daterange } = this.props;
		console.log(daterange);
		const { calenderClass } = this.props;
		const isSelectDisabled = validateSelect(daterange);
		const classes = `date-range-inner-container ${calenderClass}`;

		return (
			<div className='date-range-outer-container'>
				<i className={`${calenderClass}-i`}></i>
				<DateRangePicker
					className={classes}
					value={daterange}
					onChange={this.handleRangeChange}
					contiguousCalendarMonths={false}
					maxDate={new Date()}
					minDate={new Date('2020-03-19')}
				/>

				<div className={`date-picker-buttons ${calenderClass}-btn`}>
					<div className='button-divider'></div>
					<div className='date-buttons'>
						<div className='date-picker-cancel' onClick={this.handleDateCancel}>
							CANCEL
						</div>
						<div
							className={`date-picker-select ${
								!isSelectDisabled && 'disabled'
							}`}
							onClick={this.handleDateSelect}
						>
							SELECT
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default DatePicker;
