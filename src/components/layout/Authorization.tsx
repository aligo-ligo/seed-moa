import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN } from "../../utils/constant/auth";
import { useEffect } from "react";
import { useGenerationStore } from "../../store/store";

interface AuthorizationProps {
	children: React.ReactNode;
}

const Authorization: React.FC<AuthorizationProps> = ({ children }) => {
	const isLogged = Boolean(localStorage.getItem(ACCESS_TOKEN));
	const { updateHook } = useGenerationStore();
	const navigate = useNavigate();

	useEffect(() => {
		if (!isLogged) {
			navigate("/signin");
		}
	}, [isLogged, updateHook, navigate]);

	return <>{children}</>;
};

export default Authorization;
