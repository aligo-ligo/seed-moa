import { useModifySubGoal } from "../../hooks/useModifySubGoal";
import usePopUp from "../../hooks/usePopUp";
import StyledButton from "../common/StyledButton";
type Props = {
	closeModal: () => void;
	targetId: string | undefined;
};

const CheckModal = ({ closeModal, targetId }: Props) => {
	const { subGoalValue } = usePopUp();

	const { subGoalMutation } = useModifySubGoal(targetId);

	const handleClick = () => {
		subGoalMutation.mutate({
			id: targetId,
			value: subGoalValue,
			completeDate: new Date().toString(),
		});
		closeModal();
	};

	console.log("in 모달", subGoalValue);

	return (
		<div className="bg-white rounded-md">
			<h1 className="font-semibold text-xl mb-5"> 체크 포인트 최종 확인 </h1>
			<p className="font-light text-sm">
				매일 루틴을 이행하여 해당 세분화 목표를
			</p>
			<p className="font-light text-sm">달성하셨나요?</p>
			<br />
			<p className="font-light text-sm">{`체크 포인트는 ${subGoalValue}입니다`}</p>

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
