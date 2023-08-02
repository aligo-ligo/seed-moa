import { GOAL_TITLE } from "../../utils/constant/target";

type Props = {
	title: string;
	description: string;
	children: React.ReactNode;
};

const TargetCreateLayout = ({ title, description, children }: Props) => {
	return (
		<div
			className={`${
				title === GOAL_TITLE && "py-10"
			} flex flex-col desktop:p-10 mt-8 w-full min-h-max`}
		>
			<div className="mt-2 mb-16">
				<h1 className="text-2xl desktop:text-3xl w-3/4 font-semibold desktop:font-bold">
					{title}
				</h1>
				<h2 className="text-base text-gray font-medium mt-2">{description}</h2>
			</div>

			{children}
		</div>
	);
};

export default TargetCreateLayout;
