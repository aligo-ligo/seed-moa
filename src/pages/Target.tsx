import { useNavigate } from "react-router-dom";
import Header from "../components/target/Header";
import TargetForm from "../components/target/TargetForm";
import { FiEdit } from "react-icons/fi";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useInfo } from "../hooks/useInfo";
import { useQuery } from "@tanstack/react-query";
import { ModalContext } from "../context/ModalContext";
import { useContext } from "react";

const Target = () => {
	const navigate = useNavigate();
	const infoService = useInfo();
	const { data: targets } = useQuery(["targets", "all"], () => {
		return infoService?.getAllTarget();
	});
	const { isOpen } = useContext(ModalContext);
	console.log("isOpen", isOpen);
	const name = localStorage.getItem("userNickName");

	return (
		<div className={`relative flex flex-col h-screen px-6 pb-10`}>
			{isOpen && (
				<div className="absolute inset-0 bg-opacity-50 bg-black z-10">1</div>
			)}
			<Header name={name} />
			<section className="flex flex-col mt-16">
				<h1 className="font-semibold text-2xl">현재 타켓 목록</h1>
				<div className="flex flex-row">
					<Carousel className="w-full" useKeyboardArrows showThumbs={false}>
						{targets?.map(
							({
								user_id,
								goal,
								subgoal_total,
								success_count,
								vote_total,
								success_vote,
							}) => {
								return (
									<TargetForm
										key={user_id}
										{...{
											user_id,
											goal,
											subgoal_total,
											success_count,
											vote_total,
											success_vote,
										}}
									/>
								);
							}
						)}
					</Carousel>
				</div>
				<button
					className="mt-24 mx-auto w-1/3 h-14 bg-main rounded-lg"
					onClick={() => {
						navigate("/target/create");
					}}
				>
					<FiEdit className="mx-auto text-white text-2xl" />
				</button>
			</section>
		</div>
	);
};

export default Target;
