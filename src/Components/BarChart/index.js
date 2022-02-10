import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import React from "react";
import { Bar } from "react-chartjs-2";
import "./BarChart.css";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);
export const options = {
  maintainAspectRatio: true,
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Score by week",
    },
  },
};
const labels = [
  "Week1",
  "Week2",
  "Week3",
  "Week4",
  "Week5",
  "Week6",
  "Week7",
  "Week8",
  "Week9",
  "Week10",
  "Week11",
  "Week12",
  "Week13",
  "Week14",
  "Week15",
  "Week16",
];
const correct = [8, 10, 4, 8, 2, 9, 10];
const total = [12, 12, 11, 11, 12, 12, 12];
// export const data = {
// 	labels,
// 	datasets: [
// 		{
// 			label: 'Total Questions',
// 			data: dummyData2,
// 			borderColor: 'rgb(255, 99, 132)',
// 			backgroundColor: 'rgba(255, 99, 132, 0.5)',
// 			borderWidth: 2,
// 		},
// 		{
// 			label: 'Correct Answers',
// 			data: dummyData,
// 			borderColor: 'rgba(75, 192, 192, 1)',
// 			backgroundColor: 'rgba(75, 192, 192, 0.2)',
// 			borderWidth: 2,
// 		},
// 	],
// }
// const test = [
// 	{
// 		day: 1,
// 		link_id: 4,
// 		name: 'bob',
// 		password: 'bob1',
// 		pid: 2,
// 		score: 8,
// 		uid: 4,
// 		week: 1,
// 	},
// 	{
// 		day: 1,
// 		link_id: 4,
// 		name: 'bob',
// 		password: 'bob1',
// 		pid: 2,
// 		score: 8,
// 		uid: 4,
// 		week: 7,
// 	},
// 	{
// 		day: 1,
// 		link_id: 4,
// 		name: 'bob',
// 		password: 'bob1',
// 		pid: 2,
// 		score: 8,
// 		uid: 4,
// 		week: 4,
// 	},
// 	{
// 		day: 1,
// 		link_id: 4,
// 		name: 'bob',
// 		password: 'bob1',
// 		pid: 2,
// 		score: 8,
// 		uid: 4,
// 		week: 10,
// 	},
// 	{
// 		day: 1,
// 		link_id: 4,
// 		name: 'bob',
// 		password: 'bob1',
// 		pid: 2,
// 		score: 8,
// 		uid: 4,
// 		week: 1,
// 	},
// ]

const BarChart = ({ progTable }) => {
  console.log("progtable.payload bar chart: ", progTable.payload);
  if (progTable) {
    const sortedData = progTable.payload.sort((a, b) => a.week - b.week);
    console.log("sortedData: ", sortedData);
  }

  const data = {
    labels,
    datasets: [
      {
        label: "Total Questions",
        data: total,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        borderWidth: 2,
      },
      {
        label: "Correct Answers",
        data: correct,
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderWidth: 2,
      },
    ],
  };
  return (
    <div>
      <div className="bar-chart">
        <Bar options={options} data={data} width={("200px", "400px")} />
      </div>
    </div>
  );
};

export default BarChart;
