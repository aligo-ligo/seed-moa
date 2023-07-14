type Props = {
	completed: number | undefined;
};

const ProgressBar = ({ completed = 0 }: Props) => {
	const zeroCompleted = completed === 0;
	const isOverTwenty = completed > 25;

	return (
		<div className="h-8 w-full bg-[#e0e0de] rounded-md relative">
			<div
				className={`h-full bg-main rounded-md flex justify-center items-center text-xs `}
				style={{ width: `${completed}%` }}
			>
				<span
					className={`p-1 ${isOverTwenty && "text-white"} font-semibold ${
						!isOverTwenty && "ml-20 text-black"
					}  ${zeroCompleted && "hidden"}`}
				>{`${completed}%`}</span>
			</div>
		</div>
	);
};

export default ProgressBar;
