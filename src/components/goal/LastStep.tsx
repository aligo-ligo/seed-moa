type Props = {
	setStep: React.Dispatch<
		React.SetStateAction<"goal" | "subGoal" | "duration" | "lastStep">
	>;
};

const LastStep = ({ setStep }: Props) => {
	console.log("ss", setStep);
	return (
		<div>
			last
			<button
				onClick={() => {
					setStep("subGoal");
				}}
			>
				버튼
			</button>
		</div>
	);
};

export default LastStep;
