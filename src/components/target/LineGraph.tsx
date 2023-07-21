import { useRef, useEffect } from "react";
import Chart from "chart.js/auto";
import { LoudOli } from "../../utils/constant/image";
import { getDateRange, getMonthRange } from "../../utils/formatDate";

interface Props {
	start: string;
	end: string;
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

const CustomLineChart = ({ start, end }: Props) => {
	const getDateList = getDateRange(start, end);
	const getMonthList = getMonthRange(start, end);
	const chartRef = useRef<HTMLCanvasElement | null>(null);
	const chartInstanceRef = useRef<any>(null);
	const test = [1, 2, 3, 4, 5, 6, 1];

	useEffect(() => {
		const chartCanvas = chartRef?.current?.getContext("2d");
		const image = new Image();
		image.src = LoudOli;

		image.onload = () => {
			const resizedImage = resizeImage(image, 30, 30);
			if (chartCanvas) {
				chartInstanceRef.current = new Chart(chartCanvas, {
					type: "line",
					data: {
						labels: getDateList,
						datasets: [
							{
								label: "목표 성취율",
								data: [5, 30, 50, 70, 50, 70, 50, 70, 50, 70, 50, 70, 50, 70],
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
							y: {
								ticks: {
									stepSize: 100,
									callback: (value: string | number) => value + "%",
								},
								min: 0,
								max: 100,
							},
							x: {
								grid: {
									display: false,
								},
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
	}, [test]);

	return <canvas ref={chartRef} />;
};

export default CustomLineChart;
