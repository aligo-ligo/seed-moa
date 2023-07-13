import { useModifyTarget } from "../../hooks/useModifyTarget";

type Props = {
	closeModal: () => void;
	success: boolean | null | undefined;
	targetId: string | undefined;
};

const VoteModal = ({ closeModal, success, targetId: id }: Props) => {
	const { voteMutation } = useModifyTarget(id);

	console.log(id);
	console.log("voteModal", success);
	const handleClick = () => {
		voteMutation.mutate({ id, success });
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
					onClick={closeModal}
				>
					검토하기
				</button>
			</div>
		</>
	);
};

export default VoteModal;
