import { useContext, useEffect } from "react";
import Header from "../components/target/Header";
import { OliBodyImage } from "../utils/contants";
import { AuthStateContext } from "../context/AuthStateContext";

const QuestionPage = () => {
	const { isLoggedIn } = useContext(AuthStateContext);
	const userNickName = localStorage.getItem("userNickName");

	useEffect(() => {
		console.log("reRendering");
	}, [isLoggedIn]);

	return (
		<div className="relative  px-6 min-h-screen ">
			<Header name={userNickName} />
			<div className="flex flex-col items-center justify-center mt-24">
				<img src={OliBodyImage} alt="기능 개발중 이미지" className="w-24" />
				<div className="text-xl text-center">
					<p>페이지 업데이트 예정입니다</p>
					<p>Comming Soon!</p>
				</div>
			</div>
		</div>
	);
};

export default QuestionPage;
