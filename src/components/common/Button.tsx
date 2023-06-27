import { CommonButtonType } from "../../types/ButtonType";

const Button = ({ children, onClick, type, style }: CommonButtonType) => {
	return (
		<button type={type} onClick={onClick} className={style}>
			{children}
		</button>
	);
};

export default Button;
