type Props = {
	setStep: React.Dispatch<
		React.SetStateAction<"goal" | "subGoal" | "duration" | "lastStep">
	>;
};

const SubGoalRoutine = ({ setStep }: Props) => {
	console.log("ss", setStep);
	return (
		<div>
			sub
			<button
				onClick={() => {
					setStep("duration");
				}}
			>
				버튼
			</button>
		</div>
	);
};

export default SubGoalRoutine;
