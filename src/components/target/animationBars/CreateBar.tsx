type Props = {
	step: keyof typeof getPercentFormStep;
};
const getPercentFormStep = {
	goal: `scale-x-25`,
	subGoal: `scale-x-50`,
	duration: `scale-x-75`,
	lastStep: `scale-x-100`,
	done: `scale-x-100`,
};

const CreateBar = ({ step }: Props) => {
	return (
		<div className="p-2">
			<div className="h-2 w-full bg-[#e0e0de] rounded-md relative">
				<div
					className={`h-full bg-main rounded-md flex justify-center items-center text-xs ${getPercentFormStep[step]} origin-left transition-transform`}
					style={{ width: "100%" }}
				></div>
			</div>
		</div>
	);
};

export default CreateBar;
