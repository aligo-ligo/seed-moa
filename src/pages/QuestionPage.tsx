import { useContext, useEffect } from "react";
import Header from "../components/target/Header";
import { OliBodyImage } from "../utils/constant/contants";
import { AuthStateContext } from "../context/AuthStateContext";
import { motion } from "framer-motion";

const QuestionPage = () => {
	const { isLoggedIn } = useContext(AuthStateContext);
	console.log("isLoggedIn", isLoggedIn);
	useEffect(() => {
		console.log("reRendering");
	}, [isLoggedIn]);

	const userNickName = localStorage.getItem("userNickName");

	console.log("isLoggedIn", isLoggedIn);
	useEffect(() => {
		console.log("reRendering");
	}, [isLoggedIn]);

	return (
		<div className="relative  px-6 min-h-screen ">
			<Header name={userNickName} />
			<div className="flex flex-col items-center justify-center mt-24">
				<img src={OliBodyImage} alt="기능 개발중 이미지" className="w-28" />
				<div className="text-xl font-bold">사용 방법 노하우 업데이트 예정</div>
				<p className="text-xl font-bold">coming soon</p>
			</div>
		</div>
	);
};

export default QuestionPage;
