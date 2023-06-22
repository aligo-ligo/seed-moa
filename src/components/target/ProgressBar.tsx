type Props = {
	completed: number | undefined;
};

const ProgressBar = ({ completed = 0 }: Props) => {
	const progressWidth = `w-[${completed}%]`;

	return (
		<div className="h-8 w-full bg-[#e0e0de] rounded-md">
			<div
				className={`h-full ${progressWidth} bg-main rounded-md flex justify-center items-center`}
			>
				<span className="p-1 text-white font-semibold">{`${completed}%`}</span>
			</div>
		</div>
	);
};

export default ProgressBar;
