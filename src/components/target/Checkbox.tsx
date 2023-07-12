import usePopUp from "../../hooks/usePopUp";

type Props = {
	children: React.ReactNode;
	value: string;
	type: string;
	completedDate?: string | null;
	id: number;
};

const Checkbox = ({ type, id, children, completedDate }: Props) => {
	console.log("df", completedDate, id);

	return (
		<div className="mb-3">
			<div className="flex items-center my-5">
				<div className="flex">
					{type === "guest" && (
						<button className="mr-3 border-2 p-2 text-orange-400 rounded-md bg-orange-400" />
					)}

					{children}
				</div>
			</div>
		</div>
	);
};

export default Checkbox;
