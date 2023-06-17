import TargetCreateLayout from "../layout/TargetCreateLayout";

type Props = {
	setStep: React.Dispatch<
		React.SetStateAction<"goal" | "subGoal" | "duration" | "lastStep">
	>;
};

const LastStep = ({ setStep }: Props) => {
	console.log("ss", setStep);
	return (
		<TargetCreateLayout title="수정하실껀가요? ">
			<button
				onClick={() => {
					setStep("goal");
				}}
			>
				버튼
			</button>
		</TargetCreateLayout>
	);
};

export default LastStep;
