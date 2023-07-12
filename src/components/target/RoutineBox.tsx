type Props = {
	children: React.ReactNode;
	id: number;
};

const RoutineBox = ({ children, id }: Props) => {
	const sequenceOfRoutine = id + 1;
	return (
		<div className="flex items-center my-5">
			<div
				className={`w-6  text-black rounded-md`}
			>{`${sequenceOfRoutine}.`}</div>
			{children === "" ? "고민중.." : children}
		</div>
	);
};

export default RoutineBox;
