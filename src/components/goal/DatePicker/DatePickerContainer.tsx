import { CalendarContainer } from "react-datepicker";

const DatePickerContainer = ({ className, children }: any) => {
	return (
		<div
			style={{
				border: "1px solid #52681D",
				borderRadius: "0.3rem",
			}}
		>
			<CalendarContainer className={className}>
				<div
					style={{
						background: "#f0f0f0",
						padding: "15px",
						display: "flex",
						fontSize: "14px",
						fontWeight: "bold",
					}}
				>
					목표 달성일을 선택해주세요
				</div>
				<div style={{ position: "relative" }}>{children}</div>
			</CalendarContainer>
		</div>
	);
};

export default DatePickerContainer;
