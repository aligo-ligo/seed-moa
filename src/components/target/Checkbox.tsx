import { useContext } from "react";
import { CheckModalContext } from "../../context/CheckModalContext";
import usePopUp from "../../hooks/usePopUp";

type Props = {
	children: React.ReactNode;
	value: string;
	type: string;
	completedDate: string | null;
};

const Checkbox = ({ type, children, value, completedDate }: Props) => {
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
					className={`w-6 mr-3 border-2 text-orange-400 rounded-md ${
						completedDate && `bg-orange-400`
					}`}
					onClick={() => {
						updateSubGoalValue(value);
						updateIsSubGoalComplete(completedDate);
						openModal();
						changeModalType("check");
					}}
				>
					{completedDate && (
						<svg viewBox="0 0 26 26" className="fill-white">
							<path d="M10 15.586l-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z" />
						</svg>
					)}
				</button>
			)}
			{children}
		</div>
	);
};

export default Checkbox;
