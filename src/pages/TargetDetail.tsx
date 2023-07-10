import Header from "../components/target/Header";
import { useParams } from "react-router-dom";
import ProgressBar from "../components/target/ProgressBar";
import { calculatePercentage } from "../utils/calculatePercentage";
import Checkbox from "../components/target/Checkbox";
import usePopUp from "../hooks/usePopUp";
import ModalContent from "../components/common/ModalContent";
import { createPortal } from "react-dom";
import StyledButton from "../components/common/StyledButton";
import { useTarget } from "../hooks/useTarget";
import LineGraphPrep from "../components/target/LineGraphPrep";
import { useGetTarget } from "../hooks/useModifySubGoal";

const TargetDetail = () => {
	const { id } = useParams();
	const userNickName = localStorage.getItem("userNickName");
	const targetService = useTarget();
	const { data: target } = useGetTarget(id, targetService);

	console.log("target", target);

	const percentage = calculatePercentage(
		target?.successVote,
		target?.voteTotal
	);

	const {
		isModalOpen,
		openModal,
		closeModal,
		outside,
		buttonModalType,
		changeModalType,
	} = usePopUp();

	console.log("test", isModalOpen);

	return (
		<div className="relative flex flex-col min-h-screen px-6 mb-10">
			<Header name={userNickName} />
			<div>
				<h1 className="font-semibold text-3xl text-center">{target?.goal}</h1>
				<div className="flex flex-col gap-6 mt-10">
					<div>
						<h2 className="font-semibold text-xl">성취 그래프</h2>
						<LineGraphPrep />
					</div>
					<div>
						<h2 className="font-semibold text-xl">체크 포인트</h2>
						{target?.subGoal?.map((subGoal, index) => {
							return (
								<Checkbox
									type="detail"
									key={index}
									value={subGoal.value}
									id={index}
								>
									{subGoal.value}
								</Checkbox>
							);
						})}
					</div>
					<div>
						<h2 className="font-semibold text-xl">루틴</h2>
						{target?.routine.map((subGoal, index) => {
							return <p key={index}>{subGoal.value}</p>;
						})}
					</div>
					<div>
						<div className="flex justify-between items-center">
							<h2 className="font-semibold text-xl mb-8">투표</h2>
							<p className="text-xs font-bold">{`${
								target?.voteTotal || 0
							}명 참여했어요`}</p>
						</div>
						<ProgressBar completed={percentage} />
					</div>
				</div>

				<div className="flex justify-center m-20">
					<StyledButton
						styleName="sharing"
						type="button"
						onClick={() => {
							openModal();
							changeModalType("sharing");
						}}
					>
						공유
					</StyledButton>
				</div>
				{isModalOpen &&
					createPortal(
						<ModalContent
							shareUrl={target?.url}
							buttonModalType={buttonModalType}
							outside={outside}
							closeModal={closeModal}
							subGoal={target?.subGoal}
						/>,
						document.body
					)}
			</div>
		</div>
	);
};

export default TargetDetail;
