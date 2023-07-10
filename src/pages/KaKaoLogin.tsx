import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthService } from "../hooks/useAuth";
// import "./KakaoLogin.css";

export default function KakaoLogin() {
	// const [temp, setTemp] = useState("");
	const code = new URL(window.location.href).searchParams.get("code");
	const authService = useAuthService();

	const navigate = useNavigate();

	useEffect(() => {
		const getKakaoToken = async () => {
			await authService
				?.kakaoSignin(code)
				.then((res) => {
					localStorage.setItem("accessToken", res.accessToken);
					localStorage.setItem("userNickName", res.user.nickName.toString());
					navigate("/target");
				})
				.catch((err) => {
					console.log(err.response);
				});
		};

		getKakaoToken();
	}, []);

	return (
		<section>
			<h1> 카카오 로그인 중입니다.</h1>
		</section>
	);
}
