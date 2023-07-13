import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthStateContext } from "../../context/AuthStateContext";

interface AuthorizationProps {
	children: React.ReactNode;
}

const Authorization: React.FC<AuthorizationProps> = ({ children }) => {
	const { isLoggedIn } = useContext(AuthStateContext);
	console.log("프로텍트 로그인인지", isLoggedIn);
	const navigate = useNavigate();

	useEffect(() => {
		if (!isLoggedIn) {
			navigate("/signin");
		}
	}, [isLoggedIn, navigate]);

	return <>{children}</>;
};

export default Authorization;
