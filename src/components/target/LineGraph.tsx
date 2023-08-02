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
import zoomPlugin from "chartjs-plugin-zoom";
import "chartjs-adapter-date-fns";

import { SelectKey } from "../../types/Chart";
import {
	convertDateForDay,
	formatDate,
	getDateRange,
	getPrevDate,
} from "../../utils/formatDate";
import { AchievementDate } from "../../types/TargetTypes";

interface Props {
	start: string;
	end: string;
	achieveDay: AchievementDate;
}

ChartJS.register(
	zoomPlugin,
	LineElement,
	CategoryScale, // x axis
	LinearScale, //y axis
	PointElement,
	TimeScale
);

const CustomLineChart = ({ start, end, achieveDay }: Props) => {
	const [isWhichChart, setIsWhichChart] = useState<SelectKey>("day");
	const chartRef = useRef<ChartJS<"line", AchievementDate, string>>(null);
	const getDateList = getDateRange(start, end);

	//event: MouseEvent<HTMLCanvasElement>
	const filterChartHandler = () => {
		const { current: chart } = chartRef;

		if (!chart) {
			return;
		}

		const selectElement = document.getElementById(
			"mySelect"
		) as HTMLSelectElement;
		const selectedValue = selectElement?.value as SelectKey;

		setIsWhichChart(selectedValue);
	};

	const data = {
		labels: getDateList,
		datasets: [
			{
				data: achieveDay,
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
				min: getPrevDate(formatDate(new Date().toDateString())),
				max: end,
				ticks: {
					autoSkip: false,
					stepSize: 1,
					maxTicksLimit: 10,
					font: {
						size: 10,
					},

					callback: (value: string | number) =>
						convertDateForDay(formatDate(value)),
				},

				grid: {
					display: false, //뒷배경 라인 없애기
				},
			},

			y: {
				ticks: {
					stepSize: 50,
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
			<div className="flex justify-end items-center gap-1">
				<select
					id="mySelect"
					className="text-sm outline-none relative border border-main bg-main py-1 text-white px-2 rounded-xl"
					onChange={filterChartHandler}
				>
					<option value="day">일간</option>
					<option value="week">주간</option>
					<option value="month">월간</option>
				</select>
			</div>

			<Line
				fallbackContent="null"
				data={data}
				options={options}
				ref={chartRef}
			/>
		</>
	);
};

export default CustomLineChart;
