import { CalendarContainer } from "react-datepicker";

const DatePickerContainer = ({ className, children }: any) => {
	return (
		<div style={{}}>
			<CalendarContainer className={className}>
				<div style={{ position: "relative" }}>{children}</div>
			</CalendarContainer>
		</div>
	);
};

export default DatePickerContainer;
