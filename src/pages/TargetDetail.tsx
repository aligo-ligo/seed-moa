import { useQuery } from "@tanstack/react-query";
import Header from "../components/target/Header";
import { useInfo } from "../hooks/useInfo";
import { useParams } from "react-router-dom";
import LineGraph from "../components/target/LineGraph";
import ProgressBar from "../components/target/ProgressBar";
import { calculatePercentage } from "../utils/calculatePercentage";
import { useState } from "react";
import { FiX } from "react-icons/fi";

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

	console.log(isOpen);
	const openModal = () => {
		setIsOpen(true);
	};

	const closeModal = () => {
		setIsOpen(false);
	};

	return (
		<div className="relative flex flex-col h-screen px-6 pb-10">
			{isOpen && (
				<div className="absolute inset-0 bg-opacity-50 bg-black z-10">
					<div className="flex flex-col items-center justify-center h-full ">
						<div className="bg-white px-6 py-10 w-2/3 rounded-md">
							<div className="flex justify-end cursor-pointer">
								<FiX onClick={closeModal} onKeyDown={closeModal} />
							</div>
							<h1 className="font-semibold text-2xl">
								주변 사람들에게 알리고!
							</h1>
							<p>공유해준 분에게 추첨을 통해 스타벅스 쿠폰을 보내드려요</p>
							<div className="flex items-center mb-8 border-main border-2 border-solid rounded-md py-2 px-4 relative">
								<input
									type="text"
									className="placeholder:text-xs w-full outline-none text-emerald-800"
								/>
								<button
									className="text-sm w-10 h-min bg-orange-400 py-1 px-1 rounded-md text-white"
									type="button"
								>
									복사
								</button>
							</div>
							<div className="flex justify-center">
								<button
									className="text-lg w-1/2 h-8 desktop:w-9/12 desktop:h-10 bg-main rounded-md desktop:text-xl text-white"
									onClick={closeModal}
								>
									닫기
								</button>
							</div>
						</div>
					</div>
				</div>
			)}
			<Header />
			<div>
				<h1 className="font-semibold text-2xl">{target?.goal}</h1>
				<div className="flex flex-col gap-6">
					<div>
						<h2 className="font-semibold text-xl">성취 그래프</h2>
						<LineGraph />
					</div>
					<h2 className="font-semibold text-xl">체크 포인트</h2>
					<h2 className="font-semibold text-xl">루틴</h2>
					<div>
						<h2 className="font-semibold text-xl mb-8">투표</h2>
						<ProgressBar completed={percentage} />
						<div className="flex gap-4">
							<button className="h-12 w-full bg-[#e0e0de] rounded-md mt-4">
								성공
							</button>
							<button className="h-12 w-full bg-[#e0e0de] rounded-md mt-4">
								실패
							</button>
						</div>
					</div>
				</div>
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
