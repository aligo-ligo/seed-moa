import { createPortal } from "react-dom";
import StyledButton from "../components/common/StyledButton";
import LineGraphPrep from "../components/target/LineGraphPrep";
import LineGraph from "../components/target/LineGraph";
import ProgressBar from "../components/target/animationBars/ProgressBar";
import usePopUp from "../hooks/usePopUp";
import ModalContent from "../components/common/ModalContent";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { useGuest } from "../hooks/useGuest";
import { calculatePercentage } from "../utils/calculatePercentage";
import { useTargetOnGuest } from "../hooks/useGetTargets";
import Checkbox from "../components/target/Checkbox";
import SkeletonElement from "../components/layout/Skeleton";
import Header from "../components/target/Header";

const TargetGuest = () => {
	const { id } = useParams();
	const guestService = useGuest();
	const navigate = useNavigate();
	const { data: target, isLoading } = useTargetOnGuest(id, guestService);
	const [isSuccess, setIsSuccess] = useState<boolean | null>(null);
	const isUser = localStorage.getItem("accessToken");

	const percentage = calculatePercentage(
		target?.successVote,
		target?.voteTotal
	);

	const name = localStorage.getItem("userNickName");
	const {
		isModalOpen,
		openModal,
		closeModal,
		outside,
		buttonModalType,
		changeModalType,
	} = usePopUp();

	if (!target) {
		return null;
	}

	return (
		<section className="">
			<div className="relative flex flex-col min-h-screen px-6 mb-10">
				<Header name={name} />
				<div>
					<h1 className="font-semibold text-3xl text-center pointer-events-none">
						{target?.goal}
					</h1>
					<div className="flex flex-col gap-6 mt-10">
						<div>
							<h2 className="font-semibold text-xl pointer-events-none">
								성취 그래프
							</h2>
							<LineGraph
								start={target?.startDate}
								end={target?.endDate}
								achieveDay={target?.achievementDate}
							/>
						</div>
						<div>
							<h2 className="font-semibold text-xl">체크 포인트</h2>
							{isLoading && (
								<>
									<SkeletonElement type="title" />
									<SkeletonElement type="title" />
								</>
							)}
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

					<div className="mt-20">
						<div className="flex justify-between items-center">
							<h2 className="font-semibold text-xl mb-8">댓글</h2>
						</div>
						<LineGraphPrep word={"댓글 기능 필요하시면 올리에게 알려주세요"} />
					</div>
					<div className="flex  justify-center py-10">
						{isUser ? (
							<StyledButton
								styleName="result"
								type="button"
								onClick={() => {
									navigate("/target/8");
								}}
							>
								상세 페이지로 돌아가기
							</StyledButton>
						) : (
							<StyledButton
								styleName="result"
								type="button"
								onClick={() => {
									navigate("/");
								}}
							>
								나도 목표를 만들어볼래요
							</StyledButton>
						)}
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
