import { useParams } from "react-router-dom";

import { useGuest } from "../../hooks/useGuest";

type Props = {
	closeModal: () => void;
	success: boolean | null | undefined;
};

const VoteModal = ({ closeModal, success }: Props) => {
	const guestService = useGuest();
	const { id } = useParams();

	console.log("voteModal", success);
	const handleClick = () => {
		guestService
			?.getTargetVote({ id, success })
			.then((data) => {
				console.log("data", data);
			})
			.catch((error) => console.log(error.APIMessage));
		closeModal();
	};
	return (
		<>
			<div>투표는 변경하실 수 없어요 </div>
			{success ? <p>성공에 한표~</p> : <p>실패에 한표!</p>}
			<div className="flex w-full justify-center gap-10">
				<button
					className="p-2 border border-main rounded-md bg-main text-white hover:bg-mainHover hover:border-mainHover"
					onClick={handleClick}
				>
					투표하기
				</button>
				<button
					className="hover:text-gray p-2 border rounded-md"
					onClick={handleClick}
				>
					검토하기
				</button>
			</div>
		</>
	);
};

export default VoteModal;
