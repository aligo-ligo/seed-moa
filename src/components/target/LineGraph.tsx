import { useRef, useEffect } from "react";
import Chart, { TimeUnit } from "chart.js/auto";
import { LoudOli } from "../../utils/constant/image";
import "chartjs-adapter-date-fns";
import { useMap } from "../../hooks/useMap";
import { formatDate } from "../../utils/formatDate";

interface Props {
	start: string;
	end: string;
	isWhichChart: TimeUnit;
	getDateListMap: Map<string, number | null>;
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

const CustomLineChart = ({
	start,
	end,
	isWhichChart,
	getDateListMap,
}: Props) => {
	const [map, action] = useMap(getDateListMap);
	const chartRef = useRef<HTMLCanvasElement | null>(null);
	const chartInstanceRef = useRef<any>(null);
	const dateList = Array.from(getDateListMap.keys());
	//Chart.js 데이터 객체이기에 배열로 변환
	const dataArray = Array.from(map);
	const set = () => action.set(formatDate(Number(Date.now())), 0);

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
