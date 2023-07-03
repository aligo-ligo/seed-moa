import { Link, useNavigate } from "react-router-dom";

import StyledButton from "../components/common/StyledButton";
import OAuth from "../components/auth/OAuth";
import { LogoImage, heroImage } from "../utils/contants";

const LandingPage = () => {
	const navigate = useNavigate();
	return (
		<section className="flex flex-col items-center justify-center h-screen px-6 py-10 overflow-hidden">
			<div className="flex flex-col items-center justify-center">
				<img src={heroImage} alt="히어로" className="w-3/5" />
				<img src={LogoImage} alt="로고" className="w-3/5" />

				<h2 className="text-xl desktop:text-2xl font-medium text-gray mt-12 mb-4">
					공유하여 목표를 달성해보세요!
				</h2>
				<p className="text-lg desktop:text-2xl font-medium text-gray mb-24 ">
					현재 `number`개의 티켓을 성취했어요!
				</p>
			</div>

			<div className="flex flex-col items-center justify-center w-full ">
				<StyledButton
					styleName="landing"
					onClick={() => navigate("/signin")}
					type="button"
				>
					로그인
				</StyledButton>
				{/* 
				<StyledButton
					styleName="ladingSignUp"
					onClick={() => navigate("/signup")}
					type="button"
				>
					간편하게 회원가입하기
				</StyledButton> */}
				<OAuth />

				<button className="text-lg desktop:text-xl text-main ">
					<Link to="target">임시 target 이동</Link>
				</button>
			</div>
		</section>
	);
};

export default LandingPage;
