function formatDate(date: Date | null) {
	if (date !== null) {
		const targetDate = new Date(date);
		const year = targetDate.getFullYear();
		const month = targetDate.getMonth() + 1;
		const day = targetDate.getDate();
		const formattedDate = `${year}-${month}-${day}`;
		return formattedDate;
	}
}

export { formatDate };

const getFormattedDate = (date: Date) => {
	const month = date.toLocaleDateString("ko-KR", {
		month: "long",
	});

	const day = date.toLocaleDateString("ko-KR", {
		day: "numeric",
	});

	return `${month.substr(0, month.length - 1)}/${day.substr(
		0,
		day.length - 1
	)}`;
};

export const createDate = (date: Date) => {
	return new Date(
		new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0)
	);
};

// 요일 반환
export const getDayName = (date: Date) => {
	return date
		.toLocaleDateString("ko-KR", {
			weekday: "long",
		})
		.substr(0, 1);
};
