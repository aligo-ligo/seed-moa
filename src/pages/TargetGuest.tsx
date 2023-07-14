import { createPortal } from "react-dom";
import StyledButton from "../components/common/StyledButton";
import LineGraphPrep from "../components/target/LineGraphPrep";
import ProgressBar from "../components/target/animationBars/ProgressBar";
import usePopUp from "../hooks/usePopUp";
import ModalContent from "../components/common/ModalContent";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useGuest } from "../hooks/useGuest";
import { calculatePercentage } from "../utils/calculatePercentage";
import { useTargetOnGuest } from "../hooks/useGetTargets";
import Checkbox from "../components/target/Checkbox";

const TargetGuest = () => {
	const { id } = useParams();
	const guestService = useGuest();
	const { data: target } = useTargetOnGuest(id, guestService);
	const [isSuccess, setIsSuccess] = useState<boolean | null>(null);

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
		<section className="mt-10">
			<div className="relative flex flex-col min-h-screen px-6 mb-10">
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
										type="guest"
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
							{target?.routine.map((subGoal, index) => {
								return <p key={index}>{subGoal.value}</p>;
							})}
						</div>
						<div>
							<div className="flex justify-between items-center">
								<h2 className="font-semibold text-xl mb-8">투표</h2>
								<p className="text-xs">{`${target?.voteTotal || 0}명 참여`}</p>
							</div>
							<ProgressBar completed={percentage} />
						</div>
					</div>
					<div className="flex gap-4">
						<StyledButton
							styleName="successVote"
							type="button"
							onClick={() => {
								setIsSuccess(true);
								openModal();
								changeModalType("vote");
							}}
						>
							성공
						</StyledButton>
						<StyledButton
							styleName="failVote"
							type="button"
							onClick={() => {
								setIsSuccess(false);
								openModal();
								changeModalType("vote");
							}}
						>
							실패
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
								success={isSuccess}
							/>,
							document.body
						)}
				</div>
			</div>
		</section>
	);
};

export default TargetGuest;
