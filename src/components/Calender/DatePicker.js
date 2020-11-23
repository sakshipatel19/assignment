import React, { Component } from 'react';
import { DateRangePicker } from '@blueprintjs/datetime';
import moment from 'moment';

import 'normalize.css';
import '@blueprintjs/datetime/lib/css/blueprint-datetime.css';
import '@blueprintjs/core/lib/css/blueprint.css';
import './DatePicker.css';

const validateSelect = (dateRange) => {
	if (dateRange[0] === null || dateRange[1] === null) return false;
	else return true;
};
class DatePicker extends Component {
	state = {
		dates: [],
	};
	handleRangeChange = (dates) => {
		this.setState({
			dates,
		});
	};
	handleDateCancel = () => {
		this.props.handleDateCancel();
	};
	handleDateSelect = (e) => {
		e.preventDefault();
		const { dates } = this.state;
		if (validateSelect(dates)) this.props.handleDateSelect(dates);
	};
	convertEpochTimeToDate = (value) => {
		return moment(parseInt(value)).format('L');
	};
	render() {
		const { daterange } = this.props;
		const { dates } = this.state;
		let startDate = this.convertEpochTimeToDate(daterange?.startDate);
		let endDate = this.convertEpochTimeToDate(daterange?.endDate);
		const { calenderClass } = this.props;
		const isSelectDisabled = validateSelect(daterange);
		const classes = `date-range-inner-container ${calenderClass}`;

		return (
			<div className='date-range-outer-container'>
				<i className={`${calenderClass}-i`}></i>
				<DateRangePicker
					className={classes}
					value={dates}
					onChange={this.handleRangeChange}
					contiguousCalendarMonths={false}
					maxDate={new Date(endDate)}
					minDate={new Date(startDate)}
				/>

				<div className={`date-picker-buttons ${calenderClass}-btn`}>
					<div className='button-divider'></div>
					<div className='date-buttons'>
						<div className='date-picker-cancel' onClick={this.handleDateCancel}>
							CANCEL
						</div>
						<div
							className={`date-picker-select ${
								!isSelectDisabled ? 'disabled' : ''
							}`}
							onClick={(e) => this.handleDateSelect(e)}
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
