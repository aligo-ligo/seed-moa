import { useRef, useState } from "react";
import { Line } from "react-chartjs-2";
import {
	Chart as ChartJS,
	ChartOptions,
	LineElement,
	CategoryScale, // x axis
	LinearScale, //y axis
	PointElement,
	TimeScale,
} from "chart.js";

import "chartjs-adapter-date-fns";

import { useMap } from "../../hooks/useMap";
import { formatDate } from "../../utils/formatDate";
import { SelectKey } from "../../types/Chart";
import is from "date-fns/esm/locale/is/index.js";

interface Props {
	start: string;
	end: string;
	getDateListMap: Map<string, number | null>;
}

// const resizeImage = (
// 	image: HTMLImageElement,
// 	width: number,
// 	height: number
// ) => {
// 	const canvas = document.createElement("canvas");
// 	canvas.width = width;
// 	canvas.height = height;
// 	const ctx = canvas.getContext("2d");
// 	if (ctx && image.complete) {
// 		ctx.drawImage(image, 0, 0, width, height);
// 	}
// 	return canvas;
// };

ChartJS.register(
	LineElement,
	CategoryScale, // x axis
	LinearScale, //y axis
	PointElement,
	TimeScale
);

const CustomLineChart = ({ start, end, getDateListMap }: Props) => {
	const [map, action] = useMap(getDateListMap);
	const [isWhichChart, setIsWhichChart] = useState<SelectKey>("day");
	const dateList = Array.from(getDateListMap.keys());
	//Chart.js 데이터 객체이기에 배열로 변환
	const dataArray = Array.from(map);
	// const set = () => action.set(formatDate(Number(Date.now())), 0);

	const filterChartHandler = () => {
		const selectElement = document.getElementById(
			"mySelect"
		) as HTMLSelectElement;
		const selectedValue = selectElement?.value as SelectKey;
		setIsWhichChart(selectedValue);
		console.log(selectedValue);
	};

	const data = {
		labels: dateList,
		datasets: [
			{
				data: dataArray,
				label: "목표 성취율",
				backgroundColor: "#BACB91",
				borderColor: "#BACB91",
				fill: false,
				tension: 0.4,
				showLine: true,
			},
		],
	};

	const options: ChartOptions<"line"> = {
		responsive: true,
		plugins: {
			legend: {
				display: false,
			},
		},
		scales: {
			x: {
				type: "time",
				time: {
					unit: `${isWhichChart}`,
				},
				border: {
					display: false,
				},
				offset: false,
				min: start,
				max: end,
				ticks: {
					font: {
						size: 10,
					},
				},

				grid: {
					display: false, //뒷배경 라인 없애기
				},
			},

			y: {
				ticks: {
					stepSize: 100,
					callback: (value: string | number) => value + "%",
				},
				border: {
					display: false,
				},
				min: 0,
				max: 100,
			},
		},
	};

	return (
		<>
			<div className="flex justify-end">
				<select
					id="mySelect"
					className="text-sm outline-none"
					onChange={filterChartHandler}
				>
					<option value="day">일별</option>
					<option value="week">주별</option>
					<option value="month">월별</option>
				</select>
			</div>
			<Line data-chromatic="ignore" data={data} options={options} />
			{/* <canvas ref={chartRef}></canvas> */}
		</>
	);
};

export default CustomLineChart;
