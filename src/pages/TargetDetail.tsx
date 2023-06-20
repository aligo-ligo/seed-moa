import { useQuery } from "@tanstack/react-query";
import Header from "../components/target/Header";
import { useInfo } from "../hooks/useInfo";
import { useParams } from "react-router-dom";
import LineGraph from "../components/target/LineGraph";
import ProgressBar from "../components/target/ProgressBar";
import { calculatePercentage } from "../utils/calculatePercentage";

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

	return (
		<div className="relative flex flex-col h-screen px-6 pb-10">
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
			<button className="w-1/2 h-12 text-xl bg-main px-10 py-2 rounded-xl text-white mx-auto mt-10">
				공유
			</button>
		</div>
	);
};

export default TargetDetail;
