import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const Chart = ({ data }) => {
  const chartData = {
    labels: data.labels,
    datasets: [
      {
        data: data.values,
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
      },
    ],
  };

  return (
    <div className="chart-container">
      <Pie
        data={chartData}
        options={{
          responsive: true,
          maintainAspectRatio: false, // Allow chart to resize
        }}
      />
    </div>
  );
};

export default Chart;