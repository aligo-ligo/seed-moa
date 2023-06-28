import DatePicker from "react-datepicker";
import DatePickerContainer from "./DatePickerContainer";
import { createDate, getDayName } from "../../../utils/formatDate";
import { useFormContext } from "react-hook-form";

type Props = {
	name: Date;
};

const DatePickerComponent = ({ name }: Props) => {
	const { register, setValue } = useFormContext();
	return (
		<DatePicker
			dateFormat={`yyyy년 MM월 dd일`}
			className="placeholder:text-s w-full h-10 outline-none text-emerald-800 border-b-2 border-main"
			{...register("endDate")}
			selected={name}
			onChange={(date) => setValue("endDate", date, { shouldValidate: true })}
			placeholderText="날짜를 선택해주세요"
			isClearable
			withPortal
			minDate={new Date()}
			calendarContainer={DatePickerContainer}
			dayClassName={(date) =>
				getDayName(createDate(date)) === "토"
					? "saturday"
					: getDayName(createDate(date)) === "일"
					? "sunday"
					: null
			}
			// calendarClassName="bg-mainHover"
		/>
	);
};

export default DatePickerComponent;
