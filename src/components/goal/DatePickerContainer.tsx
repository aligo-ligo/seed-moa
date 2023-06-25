import { CalendarContainer } from "react-datepicker";

const DatePickerContainer = ({ className, children }: any) => {
	return (
		<div style={{ padding: "16px", background: "#216ba5", color: "#fff" }}>
			<CalendarContainer className={className}>
				<div style={{ background: "#f0f0f0" }}>
					언제까지 목표를 달성하실껀가요?{" "}
				</div>
				<div style={{ position: "relative" }}>{children}</div>
			</CalendarContainer>
		</div>
	);
};

export default DatePickerContainer;
