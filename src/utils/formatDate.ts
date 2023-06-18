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
