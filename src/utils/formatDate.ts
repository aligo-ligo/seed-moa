export function formatDate(date: string) {
	if (date !== null) {
		const targetDate = new Date(date);
		const year = targetDate.getFullYear();
		const month = targetDate.getMonth() + 1;
		const day = targetDate.getDate();
		const formattedDate = `${year}-${month}-${day}`;
		return formattedDate;
	}
}

export const getNowDate = () => {
	const nowDatetoString = formatDate(new Date().toString());
	return nowDatetoString;
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
