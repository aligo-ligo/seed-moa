import { useRef, useState } from "react";
import { Line } from "react-chartjs-2";
import { parse, format } from "date-fns";
import {
	Chart as ChartJS,
	ChartOptions,
	LineElement,
	CategoryScale, // x axis
	LinearScale, //y axis
	PointElement,
	TimeScale,
} from "chart.js";
import zoomPlugin from "chartjs-plugin-zoom";
import "chartjs-adapter-date-fns";
import { useMap } from "../../hooks/useMap";
import { SelectKey } from "../../types/Chart";

interface Props {
	start: string;
	end: string;
	getDateListMap: Map<string, number | null>;
}

ChartJS.register(
	zoomPlugin,
	LineElement,
	CategoryScale, // x axis
	LinearScale, //y axis
	PointElement,
	TimeScale
);

const CustomLineChart = ({ start, end, getDateListMap }: Props) => {
	const [map, action] = useMap(getDateListMap);
	const [isWhichChart, setIsWhichChart] = useState<SelectKey>("day");
	const chartRef = useRef(null);
	const dateList = Array.from(getDateListMap.keys());

	//Chart.js 데이터 객체이기에 배열로 변환
	const dataArray = Array.from(map);
	console.log(dataArray);
	// const set = () => action.set(formatDate(Number(Date.now())), 0);

	const filterChartHandler = () => {
		const selectElement = document.getElementById(
			"mySelect"
		) as HTMLSelectElement;
		const selectedValue = selectElement?.value as SelectKey;
		setIsWhichChart(selectedValue);
		console.log(selectedValue);
	};

	console.log(chartRef);
	const data = {
		labels: dateList,
		datasets: [
			{
				data: dataArray,
				label: "목표 성취율",
				backgroundColor: "#BACB91",
				borderColor: "#BACB91",
				fill: true,
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
			zoom: {
				limits: {
					x: { min: new Date(start).getTime(), max: new Date(end).getTime() },
				},
				zoom: {
					wheel: {
						enabled: true,
					},
					pinch: {
						enabled: true,
					},
					mode: "x",
				},
				pan: {
					enabled: true,
					mode: "x",
				},
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
			<Line
				ref={chartRef}
				fallbackContent="null"
				data={data}
				options={options}
			/>
		</>
	);
};

export default CustomLineChart;
