import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";
Chart.register(ArcElement);

const DoughnutChart = () => {
  const data = {
    labels: false,
    datasets: [
      {
        data: [17.5, 1, 15, 5, 5.5, 56],
        borderColor: ["#000000", "#2F5F98", "#26C7B1", "#41B8D5", "#2D8BBA", "#F60062"],
        backgroundColor: ["#000000", "#2F5F98", "#26C7B1", "#41B8D5", "#2D8BBA", "#F60062"]
      }
    ]
  };
  const options = {
    title: {
      display: true,
      text: "Doughnut Chart"
    }
  };
  return (
    <>
      <Doughnut data={data} option={options} className="chart" />
    </>
  );
};

export default DoughnutChart;
