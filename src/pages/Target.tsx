import { useNavigate } from "react-router-dom";
import Header from "../components/target/Header";
import TargetForm from "../components/target/TargetForm";
import { FiEdit } from "react-icons/fi";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useInfo } from "../hooks/useInfo";
import { useQuery } from "@tanstack/react-query";

import { CSSProperties } from "react";
import StyledButton from "../components/common/StyledButton";
import useSidebar from "../hooks/useSideBar";

const Target = () => {
	const navigate = useNavigate();

	const infoService = useInfo();
	const { data: targets } = useQuery(["targets", "all"], () => {
		return infoService?.getAllTarget();
	});
	const { isOpen } = useSidebar();

	// 모달창인데 portal로 바꿔보자 리팩토링 해야한다.

	console.log("isOpen", isOpen);

	// 리팩토링하자!
	const name = localStorage.getItem("userNickName");

	const arrowStyles: CSSProperties = {
		position: "absolute",
		zIndex: 100,
		top: "calc(70% - 15px)",
		fontSize: "40px",
		cursor: "pointer",
	};

	return (
		<div className={`relative flex flex-col h-screen px-6 pb-10`}>
			{isOpen && (
				<div className="absolute inset-0 bg-opacity-50 bg-black z-10"></div>
			)}
			<Header name={name} />
			<section className="flex flex-col mt-10 ">
				<h1 className="font-semibold text-2xl">현재 타켓 목록</h1>
				<div className="flex flex-row justify-center mt-8 ">
					<Carousel
						className="w-full desktop:w-2/3"
						useKeyboardArrows
						showThumbs={false}
						showIndicators={false}
						renderArrowPrev={(onClickHandler, hasPrev, label) =>
							hasPrev && (
								<button
									type="button"
									onClick={onClickHandler}
									title={label}
									style={{ ...arrowStyles, left: 15 }}
								>
									-
								</button>
							)
						}
						renderArrowNext={(onClickHandler, hasNext, label) =>
							hasNext && (
								<button
									type="button"
									onClick={onClickHandler}
									title={label}
									style={{ ...arrowStyles, right: 15 }}
								>
									+
								</button>
							)
						}
						statusFormatter={(
							currentItem: number,
							total: number
						): string | JSX.Element => {
							return (
								<span className="text-black font-bold text-sm">{`${total}개의 목표 중 ${currentItem}번째`}</span>
							);
						}}
					>
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

				<StyledButton
					styleName="target"
					type="button"
					onClick={() => navigate("/target/create")}
				>
					<FiEdit className="mx-auto text-white text-2xl" />
				</StyledButton>
			</section>
		</div>
	);
};

export default Target;
