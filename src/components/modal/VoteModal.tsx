import { useParams } from "react-router-dom";
import { useGetTargetList } from "../../hooks/useModifySubGoal";
import { useTarget } from "../../hooks/useTarget";
import { useState } from "react";

type Props = {
	closeModal: () => void;
	success: boolean | null;
};

const VoteModal = ({ closeModal, success }: Props) => {
	const targetService = useTarget();
	const { id } = useParams();

	console.log("voteModal", success);
	const handleClick = () => {
		targetService
			?.getTargetVote({ id, success })
			.then((data) => {
				console.log("data", data);
			})
			.catch((error) => console.log(error.APIMessage));
	};
	return (
		<>
			<div>투표는 변경하실 수 없어요</div>
			<div className="flex w-full justify-center gap-10">
				<button
					className="p-2 border border-main rounded-md bg-main text-white hover:bg-mainHover hover:border-mainHover"
					onClick={handleClick}
				>
					투표하기
				</button>
				<button className="hover:text-gray" onClick={closeModal}>
					검토하기
				</button>
			</div>
		</>
	);
};

export default VoteModal;
