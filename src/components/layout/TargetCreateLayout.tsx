type Props = {
	title: string;
	children: React.ReactNode;
};

const TargetCreateLayout = ({ title, children }: Props) => {
	return (
		<div className="flex flex-col p-10 mt-8 w-full">
			<h1 className="text-3xl w-3/4 font-bold">{title}</h1>
			{children}
		</div>
	);
};

export default TargetCreateLayout;
