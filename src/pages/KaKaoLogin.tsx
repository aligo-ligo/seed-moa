import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import "./KakaoLogin.css";

export default function KakaoLogin() {
	const [temp, setTemp] = useState("");
	const code = new URL(window.location.href).searchParams.get("code");
	console.log(code);
	const navigate = useNavigate();

	useEffect(() => {
		const getKakaoToken = async () => {
			await axios(`http://192.168.219.103:8080/users/kakao?code=${code}`, {
				method: "GET",
				headers: {
					"Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
				},
			})
				.then((res) => {
					console.log("응답", res);
					if ("accessToken" in res.data) {
						localStorage.setItem("accessToken", res.data.accessToken);
						localStorage.setItem(
							"userNickName",
							res.data.user.nickName.toString()
						);
						navigate("/target");
					}
					// const userObj = res.data.data;
					// setTemp(userObj);
					// axios.defaults.headers.common[
					// 	"Authorization"
					// ] = `${userObj.jwtToken}`;
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
