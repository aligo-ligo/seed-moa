import { useState } from "react";

const Checkbox = ({ children }: any) => {
	const [checked, setChecked] = useState(false);
	console.log(checked);
	return (
		<div className="mb-3">
			<label>
				<input
					type="checkbox"
					checked={checked}
					onChange={() => setChecked((prev) => !prev)}
					className="mr-3"
				/>
				{children}
			</label>
		</div>
	);
};

export default Checkbox;
