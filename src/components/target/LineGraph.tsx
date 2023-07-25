import { useRef, useEffect } from "react";
import Chart, { TimeUnit } from "chart.js/auto";
import { LoudOli } from "../../utils/constant/image";
import { getDateRange } from "../../utils/formatDate";
import "chartjs-adapter-date-fns";
import gradient from "chartjs-plugin-gradient";

interface Props {
	start: string;
	end: string;
	isWhichChart: TimeUnit;
}

const resizeImage = (
	image: HTMLImageElement,
	width: number,
	height: number
) => {
	const canvas = document.createElement("canvas");
	canvas.width = width;
	canvas.height = height;
	const ctx = canvas.getContext("2d");
	if (ctx && image.complete) {
		ctx.drawImage(image, 0, 0, width, height);
	}
	return canvas;
};

const CustomLineChart = ({ start, end, isWhichChart }: Props) => {
	const getDateList = getDateRange(start, end);
	const chartRef = useRef<HTMLCanvasElement | null>(null);
	const chartInstanceRef = useRef<any>(null);

	console.log(getDateList, start, end);

	// const datasets: ChartData<"line", { key: string; value: number }[]> = {
	// 	datasets: ,
	// };
	useEffect(() => {
		const chartCanvas = chartRef?.current?.getContext("2d");
		const image = new Image();
		image.src = LoudOli;

		image.onload = () => {
			const resizedImage = resizeImage(image, 20, 20);
			if (chartCanvas) {
				chartInstanceRef.current = new Chart(chartCanvas, {
					type: "line",
					data: {
						labels: getDateList,
						datasets: [
							{
								data: [
									{ key: "2023-07-25", value: 0 },
									{ key: "2023-07-26", value: 50 },
									{ key: "2023-07-27", value: 30 },
									{ key: "2023-09-01", value: 100 },
								],
								parsing: {
									xAxisKey: "key",
									yAxisKey: "value",
								},
								label: "목표 성취율",
								backgroundColor: "#BACB91",
								borderColor: "#BACB91",
								fill: false,
								tension: 0.4,
								showLine: true,
								pointStyle: resizedImage,
								pointRadius: 30, // 데이터 포인트의 크기를 0으로 설정하여 숨깁니다.
							},
						],
					},
					options: {
						responsive: true,
						scales: {
							x: {
								type: "time",
								time: {
									unit: `${isWhichChart}`,
								},
								ticks: {
									autoSkip: false,
									labelOffset: 4,
									padding: 4,
									font: {
										size: 10,
									},
								},
								grid: {
									display: false, //뒷배경 라인 없애기
								},

								min: start,
								max: end,
							},

							y: {
								ticks: {
									stepSize: 100,
									callback: (value: string | number) => value + "%",
								},

								min: 0,
								max: 100,
							},
						},
					},
				});
			}
		};
		return () => {
			if (chartInstanceRef.current) {
				chartInstanceRef.current.destroy();
			}
		};
	}, [isWhichChart, start, end]);

	return <canvas ref={chartRef} />;
};

export default CustomLineChart;
