import { useQuery } from "@tanstack/react-query";

import Header from "../components/target/Header";
import { useInfo } from "../hooks/useInfo";
import { useParams } from "react-router-dom";
import LineGraph from "../components/target/LineGraph";
import ProgressBar from "../components/target/ProgressBar";
import { calculatePercentage } from "../utils/calculatePercentage";

import Checkbox from "../components/target/Checkbox";
import usePopUp from "../hooks/usePopUp";
import ModalContent from "../components/common/ModalContent";
import { createPortal } from "react-dom";
import StyledButton from "../components/common/StyledButton";

const TargetDetail = () => {
	const { id } = useParams();
	const infoService = useInfo();
	const { data: target } = useQuery(["target"], () => {
		return infoService?.getTarget(id);
	});
	// sidebar를 사용하는 페이지에서 최상위에 relative를 작성해야만 잘 사용할 수 있는데 이부분 리펙토링 필요

	const percentage = calculatePercentage(
		target?.success_vote,
		target?.vote_total
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
		<div className="relative flex flex-col h-screen px-6 mb-10">
			<Header name="df" />
			<div>
				<h1 className="font-semibold text-2xl">{target?.goal}</h1>
				<div className="flex flex-col gap-6">
					<div>
						<h2 className="font-semibold text-xl">성취 그래프</h2>
						<LineGraph />
					</div>
					<div>
						<h2 className="font-semibold text-xl">체크 포인트</h2>
						{target?.sub_goal.map((subGoal, index) => {
							return <Checkbox key={index}>{subGoal.value}</Checkbox>;
						})}
					</div>
					<div>
						<h2 className="font-semibold text-xl">루틴</h2>
						{target?.routine.map((subGoal, index) => {
							return <Checkbox key={index}>{subGoal.value}</Checkbox>;
						})}
					</div>
					<div>
						<h2 className="font-semibold text-xl mb-8">투표</h2>
						<ProgressBar completed={percentage} />
					</div>
				</div>
				<div className="flex gap-4">
					<StyledButton
						styleName="vote"
						type="button"
						onClick={() => {
							openModal();
							changeModalType("vote");
						}}
					>
						성공
					</StyledButton>
					<StyledButton
						styleName="vote"
						type="button"
						onClick={() => {
							openModal();
							changeModalType("vote");
						}}
					>
						실패
					</StyledButton>
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
