import { useFormContext } from "react-hook-form";

import StyledButton from "../common/StyledButton";
import { TargetStepType } from "../../types/TargetType";

type Props = {
	present: string[];
	next: TargetStepType;
	setStep: React.Dispatch<React.SetStateAction<TargetStepType>>;
};

const TargetStepButton = ({ present, next, setStep }: Props) => {
	const {
		trigger,
		formState: { errors },
	} = useFormContext();

	const onClickHandler = async () => {
		const validate = await trigger(present);
		if (!validate) {
			console.log("res", errors);
		} else {
			setStep(next);
		}
	};
	return (
		<StyledButton
			styleName="targetCreate"
			type="button"
			onClick={onClickHandler}
		>
			다음으로 가기
		</StyledButton>
	);
};

export default TargetStepButton;
