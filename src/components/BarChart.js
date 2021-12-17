import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);
const Barchart = () => {
  const data = {
    labels: ["Team", "Private Sale", "Community", "Public Sale", "Seed Sale"],
    datasets: [
      {
        label: "Token Supply Distribution",
        backgroundColor: ["#E10849", "#FFE600", "#10CF6A", "#FFA448", "#004DC9"],
        barPercentage: 0.5,
        barThickness: 10,
        maxBarThickness: 8,
        minBarLength: 2,
        data: [15, 15, 35, 25, 10]
      }
    ]
  };
  const options = {
    plugins: {
      legend: {
        display: false
      }
    }
  };
  return (
    <>
      <Bar data={data} option={options} className="bar" />
    </>
  );
};

export default Barchart;
