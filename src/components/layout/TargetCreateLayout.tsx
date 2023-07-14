type Props = {
	title: string;
	description: string;
	children: React.ReactNode;
};

const TargetCreateLayout = ({ title, description, children }: Props) => {
	return (
		<div className="phone:p-0 flex flex-col desktop:p-10 mt-8 w-full">
			<div className="mt-8 mb-16">
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
