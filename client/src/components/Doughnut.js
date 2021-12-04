import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement } from 'chart.js';
Chart.register(ArcElement);

const DoughnutChart = () => {
  const data = {
    labels: false,
    datasets: [
      {
        data: [2.5, 3, 3, 3, 3, 6, 12, 15, 17.5, 35],
        borderColor: [
          '#000000',
          '#2F5F98',
          '#26C7B1',
          '#41B8D5',
          '#2D8BBA',
          '#F60062',
          '#FFA448',
          '#10CF6A',
          '#FFE600',
          '#704E85',
        ],
        backgroundColor: [
          '#000000',
          '#2F5F98',
          '#26C7B1',
          '#41B8D5',
          '#2D8BBA',
          '#F60062',
          '#FFA448',
          '#10CF6A',
          '#FFE600',
          '#704E85',
        ],
      },
    ],
  };
  const options = {
    title: {
      display: true,
      text: 'Doughnut Chart',
    },
  };
  return (
    <>
      <Doughnut data={data} option={options} className="chart" />
    </>
  );
};

export default DoughnutChart;
