import { useFormContext } from "react-hook-form";
import TargetCreateLayout from "../layout/TargetCreateLayout";

type Props = {
	setStep: React.Dispatch<
		React.SetStateAction<"goal" | "subGoal" | "duration" | "lastStep">
	>;
};

const Duration = ({ setStep }: Props) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useFormContext();
	return (
		<TargetCreateLayout title="언제까지 목표를 달성하실껀가요?">
			<button
				onClick={() => {
					setStep("lastStep");
				}}
			>
				버튼
			</button>
		</TargetCreateLayout>
	);
};

export default Duration;
