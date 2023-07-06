import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface AuthorizationProps {
	children: React.ReactNode;
}

const Authorization: React.FC<AuthorizationProps> = ({ children }) => {
	const isLogged = Boolean(localStorage.getItem("accessToken"));
	console.log("logged", isLogged);
	console.log("mount");
	const navigate = useNavigate();

	useEffect(() => {
		if (!isLogged) {
			navigate("/signin");
		}
	}, [isLogged]);

	return <>{children}</>;
};

export default Authorization;
