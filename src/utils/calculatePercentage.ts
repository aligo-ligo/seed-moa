const calculatePercentage = (
	up: number | undefined,
	down: number | undefined
) => {
	if (typeof up === "number" && typeof down === "number") {
		const percentage = Math.round((up / down) * 100);
		return percentage;
	}
	return;
};

export { calculatePercentage };
