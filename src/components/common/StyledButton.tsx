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
		result: "text-sm text-main hover:text-mainHover",
		landing:
			"text-lg w-full h-14 bg-main rounded-md text-xl text-white hover:bg-mainHover ease-in duration-100",
		ladingSignUp: "text-lg desktop:text-xl text-main ",
		login: `w-full text-lg ${
			disable ? "bg-mainHover" : "bg-main"
		}  px-10 py-2 mt-4 text-white rounded-md  hover:bg-mainHover ease-in duration-100 h-14`,
		signInAndUp:
			"text-sm text-mainHover self-center mt-8 hover:text-main ease-in duration-100",
		target:
			"mt-12 mb-10 mx-auto w-3/5 h-14 bg-main rounded-lg hover:bg-mainHover",
		targetCreate:
			"w-full h-16 text-xl bg-main px-10 py-2 mt-10 mb-10 text-white rounded-xl hover:bg-mainHover duration-100",
		sharing:
			" h-12 text-xl bg-main py-2 rounded-xl text-white hover:bg-mainHover",
		successVote:
			"h-12 w-full bg-skyblue rounded-md mt-4 text-success hover:opacity-80",
		failVote:
			"h-12 w-full bg-skyRed rounded-md mt-4 text-fail hover:opacity-80",
		sharingExit:
			"text-lg w-1/2 h-8 desktop:w-9/12 desktop:h-10 bg-main rounded-md desktop:text-xl text-white hover:bg-mainHover mt-4",
		copy: "text-sm w-10 h-min bg-orange-400 py-1 px-1 rounded-md text-white",
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
