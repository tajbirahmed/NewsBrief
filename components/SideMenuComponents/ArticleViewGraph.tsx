import {
	LineChart,
} from 'react-native-chart-kit'

	;
import React, { useEffect, useState } from 'react'
import { View, Text, Dimensions } from 'react-native';
import { getWeeklyArticleView } from '@/utils/getWeeklyArticleView';

const ArticleViewGraph = () => {
	const [line, setLine] = useState({
		labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
		datasets: [
			{
				data: [0, 0, 0, 0, 0, 0, 0],
				strokeWidth: 2,
			},
		],
	});
	useEffect(() => {
		getWeeklyArticleView()
			.then((res) => {
				const updatedDatasets = [...line.datasets];
				updatedDatasets[0].data = res;
				setLine({ ...line, datasets: updatedDatasets });
			})
			.catch((error) => {
				console.error("Error fetching view data:", error);
			});
	}, []);
	
	return (
		<View>
			<LineChart
				data={line}
				width={360} // from react-native
				height={250}
				chartConfig={{
					backgroundColor: '#244133',
					backgroundGradientFrom: '#244133',
					backgroundGradientTo: '#2c0c1c',
					decimalPlaces: 2,
					color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
					style: {
						borderRadius: 16
					}
				}}
				bezier
				style={{
					borderRadius: 20
				}}
				yAxisInterval={4}
			/>
		</View>
	)
}

export default ArticleViewGraph