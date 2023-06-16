type Props = {
	setStep: React.Dispatch<
		React.SetStateAction<"goal" | "subGoal" | "duration" | "lastStep">
	>;
};

const Duration = ({ setStep }: Props) => {
	console.log("ss", setStep);
	return (
		<div>
			Dura
			<button
				onClick={() => {
					setStep("lastStep");
				}}
			>
				버튼
			</button>
		</div>
	);
};

export default Duration;
