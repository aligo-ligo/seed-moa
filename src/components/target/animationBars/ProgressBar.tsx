type Props = {
	completed: number | undefined;
};

const ProgressBar = ({ completed = 0 }: Props) => {
	const zeroCompleted = completed === 0;
	const isOverTwenty = completed > 25;

	return (
		<div className="h-8 w-full bg-[#e0e0de] rounded-md relative">
			{zeroCompleted ? (
				<div
					className={`w-full h-full p-1 text-black flex justify-center items-center text-xs relative font-semibold`}
				>
					<p>0%</p>
				</div>
			) : (
				<div
					className={`w-full h-full bg-main rounded-md flex justify-center items-center text-xs font-semibold `}
					style={{ width: `${completed}%` }}
				>
					<div className={`p-1 ${isOverTwenty && "text-white"}  `}>
						{`${completed}%`}
					</div>
				</div>
			)}
		</div>
	);
};

export default ProgressBar;
