import { useNavigate } from "react-router-dom";
import Header from "../components/target/Header";
import TargetForm from "../components/target/TargetForm";
import { FiEdit } from "react-icons/fi";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useInfo } from "../hooks/useInfo";
import { useQuery } from "@tanstack/react-query";
import { ModalProvider } from "../context/ModalContext";

const Target = () => {
	const navigate = useNavigate();
	const infoService = useInfo();
	const { data: targets } = useQuery(["target", "all"], () => {
		return infoService?.getAllTarget();
	});
	console.log("target", targets);

	return (
		<ModalProvider>
			<div className="relative flex flex-col h-screen px-6 pb-10">
				<Header />
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
		</ModalProvider>
	);
};

export default Target;
