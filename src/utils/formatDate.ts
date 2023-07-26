export function formatDate(date: string | number): string {
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

export const getDateRange = (startDate: string, endDate: string): string[] => {
	const start = new Date(startDate);
	const end = new Date(endDate);

	const result = [];

	while (start <= end) {
		result.push(start.toISOString().split("T")[0]);
		start.setDate(start.getDate() + 1);
	}

	return result;
};

export const getWeekDate = (startDate: string, endDate: string): string[] => {
	const start = new Date(startDate);
	const end = new Date(endDate);

	const result = [];

	while (start <= end) {
		result.push(start.toISOString().split("T")[0]);
		start.setDate(start.getDate() + 1);
	}

	return result;
};

export const getMonthRange = (startDate: string, endDate: string): string[] => {
	const start = new Date(startDate);
	const end = new Date(endDate);

	const result = [];

	while (start <= end) {
		result.push(start.toISOString().split("T")[0]);
		start.setMonth(start.getMonth() + 1);
	}

	return extractMonths(result);
};

function extractMonths(datesArray: string[]): string[] {
	// 각 날짜 문자열에서 월 부분만 추출하여 새로운 배열 생성
	const monthsArray: string[] = datesArray.map(
		(date) => `${date.split("-")[1]}월`
	);

	return monthsArray;
}

export const getWeeksInRange = (
	startDate: string,
	endDate: string
): string[] => {
	const end = new Date(endDate);
	const result: string[] = [];
	const currentDate = new Date(startDate);

	while (currentDate <= end) {
		const weekNumber = getWeek(currentDate);
		const monthNumber = currentDate.getMonth() + 1;

		result.push(`${monthNumber}월 ${weekNumber}주차`);
		currentDate.setDate(currentDate.getDate() + 7);
	}

	return result;
};

export const getWeek = (date: Date) => {
	const currentDate = date.getDate();
	const firstDay = new Date(date.setDate(1)).getDay();

	return Math.ceil((currentDate + firstDay) / 7);
};
