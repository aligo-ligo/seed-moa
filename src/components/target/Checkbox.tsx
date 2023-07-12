import { useContext } from "react";
import { CheckModalContext } from "../../context/CheckModalContext";
import usePopUp from "../../hooks/usePopUp";

type Props = {
	children: React.ReactNode;
	value: string;
	type: string;
	completedDate: string | null;
	id: number;
};

const Checkbox = ({ type, id, children, value, completedDate }: Props) => {
	const { updateSubGoalValue, updateIsSubGoalComplete } =
		useContext(CheckModalContext);

	console.log("inn", completedDate);

	const { openModal, changeModalType } = usePopUp();

	return (
		<div className="flex my-5">
			{type === "guest" && (
				<button
					className={`mr-3 border-2 p-2 text-orange-400 rounded-md ${
						completedDate && `bg-orange-400`
					}`}
				/>
			)}

			{type === "detail" && (
				<button
					className={`mr-3 border-2 p-2 text-orange-400 rounded-md ${
						completedDate && `bg-orange-400`
					}`}
					onClick={() => {
						updateSubGoalValue(value);
						updateIsSubGoalComplete(completedDate);
						openModal();
						changeModalType("check");
					}}
				/>
			)}
			{children}
		</div>
	);
};

export default Checkbox;
