import { CommonButtonType } from "../../types/ButtonType";
import Button from "./Button";

interface StyledButtonType extends CommonButtonType {
	styleName: string;
}

type IStyleCateType = {
	[index: string]: string;
};

const styleCategories: IStyleCateType = {
	landing:
		"text-lg w-1/2 h-16 desktop:w-9/12 h-20 bg-main rounded-md text-xl text-white mx-auto mb-12",
};

const StyledButton = ({
	children,
	onClick,
	type,
	styleName,
}: StyledButtonType) => {
	const getStyleClasses = styleCategories[styleName];
	return (
		<>
			<Button type={type} onClick={onClick} style={getStyleClasses}>
				{children}
			</Button>
		</>
	);
};

export default StyledButton;
