type Props = {
	completed: number | undefined;
};

const ProgressBar = ({ completed = 0 }: Props) => {
	const zeroCompleted = completed === 0;
	const isOverTwenty = completed > 25;
	const forScaleIssueSolved = `${250 - completed}%`;
	console.log(forScaleIssueSolved);

	return (
		<div className="h-8 w-full bg-[#e0e0de] rounded-md relative">
			{zeroCompleted && (
				<div
					className={`w-full h-full p-1 text-black flex justify-center items-center text-xs relative font-semibold`}
				>
					<p>0%</p>
				</div>
			)}

			<span
				className={`w-full h-full bg-main rounded-md flex justify-center items-center text-xs font-semibold origin-left transition-transform duration-300 `}
				style={{ transform: `scaleX(${completed}%)` }}
			>
				{isOverTwenty && (
					<div
						className={`${isOverTwenty && "text-white"}`}
						style={{ transform: `scaleX(${forScaleIssueSolved})` }}
					>
						{`${completed}%`}
					</div>
				)}
			</span>
		</div>
	);
};

export default ProgressBar;
