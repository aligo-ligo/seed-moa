import Header from "../components/target/Header";
import { useNavigate, useParams } from "react-router-dom";
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
import LineGraph from "../components/target/LineGraph";
import Meta from "../components/common/Meta";
import SkeletonElement from "../components/layout/Skeleton";
import { useState } from "react";
import { SelectKey } from "../types/Chart";
import { MapOrEntries, useMap } from "../hooks/useMap";
import { formatDate, getDateRange } from "../utils/formatDate";

const TargetDetail = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const name = localStorage.getItem("userNickName");
	const targetService = useTarget();
	const { data: target, isLoading } = useTargetOnUser(id, targetService);

	console.log("target", target);
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
	const votePercentage = calculatePercentage(
		target?.successVote,
		target?.voteTotal
	);
	const checkPointPercentage = calculatePercentage(
		target?.successCount,
		target?.subGoalTotal
	);
	const getDateList = getDateRange(target?.startDate, target?.endDate);
	const getDateListMap = new Map();
	// formatDate(new Date().toString()))
	getDateList.forEach((date) => {
		getDateListMap.set(date, null);
	});

	console.log(getDateListMap);
	// if (date === "2023-07-26") {

	if (!target) {
		return null;
	}

	return (
		<div className="relative flex flex-col min-h-screen px-6 mb-10">
			<Header name={name} />
			{name && id && <Meta name={name} id={id} />}

			<div>
				<h1 className="font-semibold text-3xl text-center">{target?.goal}</h1>
				<div className="flex flex-col gap-6 mt-10">
					<div>
						<div className="flex justify-between">
							<p className="font-semibold text-xl">성취 그래프</p>
						</div>
						<LineGraph
							start={target?.startDate}
							end={target?.endDate}
							getDateListMap={getDateListMap}
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
						{isLoading && (
							<>
								<SkeletonElement type="title" />
								<SkeletonElement type="title" />
							</>
						)}
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
							<h2 className="font-semibold text-xl mb-8">성공 예측률 투표</h2>
							<p className="text-xs font-bold">{`${
								target?.voteTotal || 0
							}명 참여했어요`}</p>
						</div>
						<ProgressBar completed={votePercentage} />
					</div>
				</div>

				<div className="flex flex-col item-center justify-center gap-4 m-20 px-16">
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

					<StyledButton
						styleName="result"
						type="button"
						onClick={() => {
							navigate(`/result/${id}`);
						}}
					>
						결과 페이지로 이동하기
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
