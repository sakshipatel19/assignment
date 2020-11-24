import { Doughnut, Chart } from 'react-chartjs-2';
import React from 'react';

import Card from '../Card';
import LoadingCircle from '../Loader/LoadingCircle';

const PieChart = (props) => {
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
			props?.data?.data?.data?.forEach((obj, i) => {
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
		<Card className='pie-card'>
			<div className='card-header'>
				<div className='card-title'>Stats Chart 1</div>
			</div>
			{props.data.fetching ? (
				<LoadingCircle />
			) : (
				<div
					style={{
						width: '350px',
						height: '350px',
						marginRight: '30px',
						marginTop: '30px',
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
								padding: {
									left: 0,
									top: 30,
									right: 0,
									bottom: 5,
								},
							},
							rotation: 150,
							cutoutPercentage: 0,
						}}
					/>
				</div>
			)}
		</Card>
	);
};

export default PieChart;
