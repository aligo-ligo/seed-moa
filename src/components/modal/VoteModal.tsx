type Props = {
	closeModal: () => void;
};

const VoteModal = ({ closeModal }: Props) => {
	return (
		<>
			<div>투표는 변경하실 수 없어요</div>
			<button>투표 완료하기</button>
			<button onClick={closeModal}>닫기</button>
		</>
	);
};

export default VoteModal;
