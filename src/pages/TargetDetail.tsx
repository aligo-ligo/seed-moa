import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import Header from "../components/target/Header";
import { useInfo } from "../hooks/useInfo";
import { useParams } from "react-router-dom";
import LineGraph from "../components/target/LineGraph";
import ProgressBar from "../components/target/ProgressBar";
import { calculatePercentage } from "../utils/calculatePercentage";
import SharingModal from "../components/target/SharingModal";
import Checkbox from "../components/target/Checkbox";
import usePopUp from "../hooks/usePopUp";
import ModalContent from "../components/common/ModalContent";
import { createPortal } from "react-dom";

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

	const [isOpen, setIsOpen] = useState(false);
	const { isModalOpen, openModal, closeModal, outside } = usePopUp();

	return (
		<div className="relative flex flex-col h-screen px-6 pb-10">
			{isOpen && <SharingModal closeModal={closeModal} />}
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
			</div>
			<div className="flex gap-4">
				<button
					onClick={() => openModal()}
					className="h-12 w-full bg-[#e0e0de] rounded-md mt-4"
				>
					성공
				</button>

				<button
					onClick={() => openModal()}
					className="h-12 w-full bg-[#e0e0de] rounded-md mt-4"
				>
					실패
				</button>
				{isModalOpen &&
					createPortal(
						<ModalContent outside={outside} closeModal={closeModal} />,
						document.body
					)}
			</div>
			<button
				className="w-1/2 h-12 text-xl bg-main px-10 py-2 rounded-xl text-white mx-auto mt-10"
				onClick={openModal}
			>
				공유
			</button>
		</div>
	);
};

export default TargetDetail;
