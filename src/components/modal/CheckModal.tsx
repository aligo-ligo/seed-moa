import { useTarget } from "../../hooks/useTarget";
import { SubGoalType } from "../../types/TargetTypes";
import StyledButton from "../common/StyledButton";
type Props = {
	closeModal: () => void;
	subGoal: SubGoalType[] | undefined;
};

const CheckModal = ({ closeModal, subGoal }: Props) => {
	const targetService = useTarget();
	const test = {
		id: 34,
		value: "3kg 빼기",
		completeDate: "2023-07-50",
	};
	console.log("inmodl", subGoal);
	const handleClick = () => {
		targetService
			?.postSubGoal(test)
			.then((data) => {
				console.log("data", data);
			})

			.catch((error) => console.log(error.signInMessage));
	};

	return (
		<div className="bg-white rounded-md">
			<h1 className="font-semibold text-xl mb-5"> 체크 포인트 최종 확인 </h1>

			<p className="font-light text-sm">
				매일 루틴을 이행하여 해당 세분화 목표를
			</p>
			<p className="font-light text-sm">달성하셨나요?</p>
			<br />
			{/* <p className="font-light text-sm">{`체크 포인트는 입니다`}</p> */}

			<div className="flex justify-center gap-4 p-4 ">
				<StyledButton
					styleName="sharingExit"
					type="button"
					onClick={handleClick}
				>
					네
				</StyledButton>
				<StyledButton
					styleName="sharingExit"
					type="button"
					onClick={closeModal}
				>
					아니요
				</StyledButton>
			</div>
		</div>
	);
};

export default CheckModal;
