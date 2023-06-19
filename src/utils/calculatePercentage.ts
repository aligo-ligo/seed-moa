const calculatePercentage = (up: number, down: number) => {
	const percentage = Math.round((up / down) * 100);

	return percentage;
};

export { calculatePercentage };
