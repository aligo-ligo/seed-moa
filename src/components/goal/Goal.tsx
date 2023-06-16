import { useNavigate } from "react-router-dom";

type Props = {
	setStep: React.Dispatch<
		React.SetStateAction<"goal" | "subGoal" | "duration" | "lastStep">
	>;
};

const Goal = ({ setStep }: Props) => {
	console.log("ss", setStep);
	return (
		<div>
			Goal
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

export default Goal;
