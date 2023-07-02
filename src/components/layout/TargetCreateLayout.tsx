type Props = {
	title: string;
	children: React.ReactNode;
};

const TargetCreateLayout = ({ title, children }: Props) => {
	return (
		<div className="phone:p-0 flex flex-col desktop:p-10 mt-8 w-full">
			<h1 className="text-2xl desktop:text-3xl w-3/4 font-semibold desktop:font-bold my-16">
				{title}
			</h1>
			{children}
		</div>
	);
};

export default TargetCreateLayout;
