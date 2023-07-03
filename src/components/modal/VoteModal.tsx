type Props = {
	closeModal: () => void;
};

const VoteModal = ({ closeModal }: Props) => {
	return (
		<>
			<div>I'm a modal dialog</div>
			<button onClick={closeModal}>Close</button>
		</>
	);
};

export default VoteModal;
