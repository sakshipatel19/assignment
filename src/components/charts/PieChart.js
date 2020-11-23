import { Doughnut, Chart } from 'react-chartjs-2';
import React from 'react';

const PieChart = (props) => {
	console.log(props.data);

	const getRandomColor = () => {
		var letters = '0123456789ABCDEF';
		var color = '#';
		for (var i = 0; i < 6; i++) {
			color += letters[Math.floor(Math.random() * 16)];
		}
		return color;
	};
	const createGraphData = () => {
		const graphData = {};
		graphData.datasets = [];
		const data = [],
			labels = [],
			colors = [];

		props?.data?.data &&
			props?.data?.data.forEach((obj, i) => {
				data.push(obj?.CM001_percent);
				labels.push(obj?.advertiserId);
				colors.push(getRandomColor());
			});
		graphData.labels = labels;
		graphData.datasets.push({
			data: data,
			backgroundColor: colors,
			borderWidth: 1,
			hoverBorderColor: '#fff',
		});
		return graphData;
	};

	return (
		<div
			style={{
				width: '400px',
				height: '400px',
				marginRight: '30px',
			}}
		>
			<Doughnut
				redraw
				data={createGraphData()}
				width={300}
				height={300}
				options={{
					aspectRatio: 1,
					tooltips: {
						enabled: true,
					},
					legend: {
						display: false,
					},
					layout: {
						padding: 5,
					},
					rotation: 150,
					cutoutPercentage: 0,
				}}
			/>
		</div>
	);
};

export default PieChart;
