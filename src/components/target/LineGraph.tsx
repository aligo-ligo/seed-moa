import { useRef, useState } from "react";
import {
	Line,
	getDatasetAtEvent,
	getElementAtEvent,
	getElementsAtEvent,
} from "react-chartjs-2";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

import {
	Chart as ChartJS,
	ChartOptions,
	LineElement,
	CategoryScale, // x axis
	LinearScale, //y axis
	PointElement,
	TimeScale,
	Filler,
} from "chart.js";
import zoomPlugin from "chartjs-plugin-zoom";
import "chartjs-adapter-date-fns";

import { SelectKey } from "../../types/Chart";
import {
	convertDateForDay,
	createDate,
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
	TimeScale,
	Filler
);

const CustomLineChart = ({ start, end, achieveDay }: Props) => {
	const [isWhichChart, setIsWhichChart] = useState<SelectKey>("day");
	const chartRef = useRef<ChartJS<"line", AchievementDate, string>>(null);
	const getDateList = getDateRange(start, end);
	console.log("chartRef", chartRef);

	//event: MouseEvent<HTMLCanvasElement>
	const filterChartHandler = () => {
		const { current: chart } = chartRef;

		if (!chart) {
			return;
		}
		console.log("chart", formatDate(chart.scales.x.min));

		const selectElement = document.getElementById(
			"mySelect"
		) as HTMLSelectElement;
		const selectedValue = selectElement?.value as SelectKey;
		console.log("check", selectedValue);

		setIsWhichChart(selectedValue);

		// printDatasetAtEvent(getDatasetAtEvent(chart, event));
		// printElementAtEvent(getElementAtEvent(chart, event));
		// printElementsAtEvent(getElementsAtEvent(chart, event));
	};

	const data = {
		labels: getDateList,
		datasets: [
			{
				data: achieveDay,
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
				<label htmlFor="mySelect">
					<FiChevronDown />
				</label>
				<select
					id="mySelect"
					className="text-sm outline-none relative"
					onChange={filterChartHandler}
				>
					<option value="day" className="absolute">
						일별
					</option>
					<option value="week" className="absolute">
						주별
					</option>
					<option value="month" className="absolute">
						월별
					</option>
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
