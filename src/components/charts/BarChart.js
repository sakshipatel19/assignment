import React from 'react';
import { Bar } from 'react-chartjs-2';
import Card from '../Card';

const BarGraph = (props) => {
	const createGraphData = () => {
		const data = props?.data;
		const datasets = [];
		const labels = [],
			dataArray = [];

		data &&
			data?.data.forEach((item) => {
				labels.push(item?.publisherId);
				dataArray.push(item?.impressions_offered);
			});

		datasets.push({ data: dataArray });

		const graphData = {
			labels: labels,
			datasets: datasets,
		};
		return graphData;
	};

	const getChartData = (canvas) => {
		const chartData = createGraphData();
		if (chartData.datasets) {
			chartData.datasets.forEach((set, i) => {
				let backgroundColor = ['#4CA0FA', '#F79764'];
				set.backgroundColor = backgroundColor[i];
				set.barThickness = 10;
				set.maxBarThickness = 10;
				set.categoryPercentage = 0.2;
				set.barPercentage = 0.3;
			});
		}
		return chartData;
	};

	const barChartOptions = {
		responsive: true,
		tooltips: {
			enabled: true,
		},
		layout: {
			padding: {
				left: 0,
				top: 30,
				right: 0,
				bottom: 5,
			},
		},
		maintainAspectRatio: true,

		scales: {
			xAxes: [
				{
					gridLines: {
						display: false,
						drawBorder: false,
					},

					ticks: {
						autoSkip: false,
						maxRotation: 0,
						fontSize: 10,
						fontColor: '#212129',

						callback: function (label) {
							if (/\s/.test(label)) {
								return label.split(' ');
							} else {
								return label;
							}
						},
					},
				},
			],
			yAxes: [
				{
					gridLines: {
						display: true,
						drawBorder: false,
						color: '#f2f2f2',
						zeroLineColor: '#f2f2f2',
					},
					ticks: {
						padding: 10,
						fontSize: 10,
						fontColor: '#212129',

						callback: function (label, index, labels) {
							return label % 20 ? '' : label;
						},
					},
				},
			],
		},

		hover: {},
		legend: {
			display: false,
		},
	};
	return (
		<Card>
			<div className='card-header'>
				<div className='card-title'>Bar Chart</div>
			</div>
			<div
				className='bargraph-container'
				style={{ width: '900px', height: '500px' }}
			>
				<Bar
					redraw
					data={getChartData}
					options={barChartOptions}
					width={900}
					height={500}
				/>
			</div>
		</Card>
	);
};

export default BarGraph;
