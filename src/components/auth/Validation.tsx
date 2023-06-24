type Props = {
	children: React.ReactNode;
};

const Validation = ({ children }: Props) => {
	return (
		<div>
			<p className="text-fail text-sm ml-1 m-2">{children}</p>
		</div>
	);
};

export default Validation;
