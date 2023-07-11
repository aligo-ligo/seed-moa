import { useNavigate } from "react-router-dom";
import Header from "../components/target/Header";
import TargetForm from "../components/target/TargetForm";
import { FiEdit } from "react-icons/fi";
import { Carousel } from "react-responsive-carousel";
import { CSSProperties } from "react";
import StyledButton from "../components/common/StyledButton";
import TargetEmptyForm from "../components/target/TargetEmptyForm";
import { useTarget } from "../hooks/useTarget";
import { useGetTargetList } from "../hooks/useModifySubGoal";
import { FiChevronsLeft, FiChevronsRight } from "react-icons/fi";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Target = () => {
	const navigate = useNavigate();
	const targetService = useTarget();
	const { data: targets } = useGetTargetList(targetService);
	const name = localStorage.getItem("userNickName");

	console.log("targets", targets);

	const arrowStyles: CSSProperties = {
		position: "absolute",
		zIndex: 10,
		top: "calc(70% - 15px)",
		fontSize: "40px",
		cursor: "pointer",
	};

	return (
		<div className={`relative flex flex-col min-h-screen px-6 pb-10`}>
			<Header name={name} />
			<section className="flex flex-col mt-10 h-full">
				<h1 className="font-semibold text-2xl">현재 타켓 목록</h1>
				<div className="flex flex-row justify-center mt-8 h-full">
					{(targets === undefined || targets.length === 0) && (
						<TargetEmptyForm />
					)}
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
									<FiChevronsLeft className="text-orange-500 bg-orange-100" />
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
									<FiChevronsRight className="text-orange-500  bg-orange-100" />
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
								id,
								userId,
								goal,
								subGoalTotal,
								successCount,
								voteTotal,
								successVote,
							}) => (
								<TargetForm
									key={userId}
									{...{
										id,
										userId,
										goal,
										subGoalTotal,
										successCount,
										voteTotal,
										successVote,
									}}
								/>
							)
						)}
					</Carousel>
				</div>
				<StyledButton
					styleName="target"
					type="button"
					onClick={() => navigate("create")}
				>
					<FiEdit className="mx-auto text-white text-2xl" />
				</StyledButton>
			</section>
		</div>
	);
};

export default Target;
