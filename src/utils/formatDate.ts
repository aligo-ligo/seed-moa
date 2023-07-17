export function formatDate(date: string): string {
	if (date !== null) {
		const targetDate = new Date(date);
		const year = targetDate.getFullYear();
		const month = targetDate.getMonth() + 1;
		const day = targetDate.getDate();
		const formattedDate = `${year}-${month}-${day}`;
		return formattedDate;
	}
	return date;
}

export const monthFormatDate = (d: Date): string => {
	const date = new Date(d);
	const monthIndex = date.getMonth() + 1;
	const year = date.getFullYear();
	return `${year}년 ${`0${monthIndex}`.slice(-2)}월`;
};

export const getNowDate = () => {
	const nowDateToString = formatDate(new Date().toString());
	return nowDateToString;
};

export const createDate = (date: Date) => {
	return new Date(
		new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0)
	);
};

// 요일 반환
export const getDayFromDiff = (present: string, future: string) => {
	const presentDate = new Date(present);
	const futureDate = new Date(future);

	const diffDate = futureDate.getTime() - presentDate.getTime();

	return Math.floor(Math.abs(diffDate / (1000 * 60 * 60 * 24)));
};

// 요일 반환
export const getDayName = (date: Date) => {
	return date
		.toLocaleDateString("ko-KR", {
			weekday: "long",
		})
		.substr(0, 1);
};
