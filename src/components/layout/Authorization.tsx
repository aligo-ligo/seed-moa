import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN, IS_LOGGED_IN } from "../../utils/constant/contants";
import { useContext, useEffect } from "react";
import { AuthStateContext } from "../../context/AuthStateContext";

interface AuthorizationProps {
	children: React.ReactNode;
}

const Authorization: React.FC<AuthorizationProps> = ({ children }) => {
	const isLogged = Boolean(localStorage.getItem(ACCESS_TOKEN));
	const { isLoggedIn } = useContext(AuthStateContext);

	console.log("프로텍트 로그인인지", isLoggedIn);
	const navigate = useNavigate();

	useEffect(() => {
		if (!isLogged) {
			navigate("/signin");
		}
	}, [isLogged, isLoggedIn, navigate]);

	return <>{children}</>;
};

export default Authorization;
