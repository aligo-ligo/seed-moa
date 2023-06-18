import { useFormContext } from "react-hook-form";
import TargetCreateLayout from "../layout/TargetCreateLayout";

type Props = {
	setStep: React.Dispatch<
		React.SetStateAction<"goal" | "subGoal" | "duration" | "lastStep">
	>;
};

const LastStep = ({ setStep }: Props) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useFormContext();
	return (
		<TargetCreateLayout title="수정하실껀가요? ">
			<button
				type="button"
				onClick={() => {
					setStep("duration");
				}}
			>
				이전
			</button>
			<button type="submit">버튼</button>
		</TargetCreateLayout>
	);
};

export default LastStep;
