import { LoudOli } from "../../../utils/constant/contants";

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

const getLocationFromStep = {
	goal: `translate-x-1/4`,
	subGoal: `translate-x-1/2`,
	duration: `translate-x-3/4`,
	lastStep: `translate-x-full`,
	done: `scale-x-100`,
};

const CreateBar = ({ step }: Props) => {
	return (
		<div className="py-4 px-4 sticky top-0 bg-white overflow-x-hidden overflow-y-hidden">
			<div className="h-2 w-full bg-[#e0e0de] rounded-md relative">
				<div
					className={`h-full bg-main rounded-md text-xs ${getPercentFormStep[step]} origin-left transition-transform duration-300`}
				></div>
				<div className={`${getLocationFromStep[step]}`}>
					<img
						src={LoudOli}
						alt="oli"
						className={`absolute h-8 -left-5 transform -translate-y-1/2 z-10 transition-transform duration-300`}
					/>
				</div>
			</div>
		</div>
	);
};

export default CreateBar;
