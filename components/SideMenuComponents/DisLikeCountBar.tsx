import { getArticleDisLikes } from '@/utils/getArticleDisLikes';
import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import {
  BarChart,
} from 'react-native-chart-kit'
const DisLikeCountBar = () => {
  const [barData, setBarData] = useState({
    labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    datasets: [
      {
        data: [0, 0, 0, 0, 0, 0, 0],
        strokeWidth: 2,
      },
    ],
  });
  const chartConfig = {
    backgroundColor: '#244133',
    backgroundGradientFrom: '#244133',
    backgroundGradientTo: '#2c0c1c',
    decimalPlaces: 2,
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
      borderRadius: 16
    }
  };
  useEffect(() => {
    getArticleDisLikes()
      .then((res) => {
        const updatedDatasets = [...barData.datasets];
        updatedDatasets[0].data = res;
        setBarData({ ...barData, datasets: updatedDatasets });
      })
      .catch((error) => {
        console.error("Error fetching view data:", error);
      });
  }, [])
  return (
    <View>
      <BarChart
        data={barData}
        width={360}
        height={250}
        yAxisSuffix={""}
        yAxisLabel={''}
        chartConfig={chartConfig}
        style={{
          borderRadius: 20
        }}
      />
    </View>
  )
}

export default DisLikeCountBar