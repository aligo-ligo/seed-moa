import { CommonButtonType } from "../../types/ButtonType";
import Button from "./Button";

interface StyledButtonType extends CommonButtonType {
	styleName: string;
}

type IStyleCateType = {
	[index: string]: string;
};

const StyledButton = ({
	children,
	onClick,
	type,
	styleName,
	disable,
}: StyledButtonType) => {
	const styleCategories: IStyleCateType = {
		landing:
			"text-lg w-[90%] h-20 desktop:w-2/3 h-20 bg-main rounded-md text-xl text-white",
		ladingSignUp: "text-lg desktop:text-xl text-main ",
		login: `w-full text-xl ${
			disable ? "bg-mainHover" : "bg-main"
		}  px-10 py-2 mt-4 text-white rounded-xl hover:bg-mainHover ease-in duration-100`,
		signInAndUp:
			"text-sm text-mainHover self-center mt-8 hover:text-main ease-in duration-100",
		target: "mt-16 mb-10 mx-auto w-1/3 h-14 bg-main rounded-lg",
		targetCreate:
			"w-full h-16 text-xl bg-main px-10 py-2 mt-10 text-white rounded-xl",
		sharing: "w-1/2 h-12 text-xl bg-main py-2 rounded-xl text-white",
		vote: "h-12 w-full bg-[#e0e0de] rounded-md mt-4",
	};

	const getStyleClasses = styleCategories[styleName];
	return (
		<>
			<Button
				type={type}
				onClick={onClick}
				style={getStyleClasses}
				disable={disable}
			>
				{children}
			</Button>
		</>
	);
};

export default StyledButton;
