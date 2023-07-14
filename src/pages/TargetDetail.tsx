import Header from "../components/target/Header";
import { useParams } from "react-router-dom";
import ProgressBar from "../components/target/animationBars/ProgressBar";
import { calculatePercentage } from "../utils/calculatePercentage";
import Checkbox from "../components/target/Checkbox";
import usePopUp from "../hooks/usePopUp";
import ModalContent from "../components/common/ModalContent";
import { createPortal } from "react-dom";
import StyledButton from "../components/common/StyledButton";
import { useTargetOnUser } from "../hooks/useGetTargets";
import { useTarget } from "../hooks/useTarget";

import RoutineBox from "../components/target/RoutineBox";
import LineGraphPrep from "../components/target/LineGraphPrep";

const TargetDetail = () => {
	const { id } = useParams();

	const name = localStorage.getItem("userNickName");
	const targetService = useTarget();
	const { data: target } = useTargetOnUser(id, targetService);

	console.log(
		"targe_________targe_________targe__targe_________targe_________targe________________t",
		target
	);

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

	return (
		<div className="relative flex flex-col min-h-screen px-6 mb-10">
			<Header name={name} />
			<div>
				<h1 className="font-semibold text-3xl text-center">{target?.goal}</h1>
				<div className="flex flex-col gap-6 mt-10">
					<div>
						<p className="font-semibold text-xl">성취 그래프</p>
						{/* <LineGraph /> */}
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
									completedDate={subGoal.completedDate}
								>
									{subGoal.value}
								</Checkbox>
							);
						})}
					</div>
					<div>
						<h2 className="font-semibold text-xl">루틴</h2>
						{target?.routine.map((routine, index) => {
							return (
								<RoutineBox key={index} id={index}>
									{routine.value}
								</RoutineBox>
							);
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
							targetId={id}
							shareUrl={target?.url}
							buttonModalType={buttonModalType}
							outside={outside}
							closeModal={closeModal}
						/>,
						document.body
					)}
			</div>
		</div>
	);
};

export default TargetDetail;
