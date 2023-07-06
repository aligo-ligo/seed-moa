import { Link, useNavigate } from "react-router-dom";

import StyledButton from "../components/common/StyledButton";
import OAuth from "../components/auth/OAuth";
import { LogoImage, OliBodyImage } from "../utils/contants";
import Header from "../components/target/Header";

const LandingPage = () => {
	const navigate = useNavigate();
	return (
		<section className="flex flex-col items-center justify-center h-screen px-6 py-10 overflow-hidden">
			<Header />
			<div className="flex flex-col items-center justify-center ">
				<img src={OliBodyImage} alt="히어로" className="w-2/5" />
				<img src={LogoImage} alt="로고" className="w-3/5" />

				<div className="flex flex-col items-center w-80">
					<h2 className="text-xl desktop:text-2xl font-medium text-gray mt-12 mb-2">
						공유하여 목표를 달성해보세요!
					</h2>
					<p className="mt-10 text-lg desktop:text-xl font-medium text-gray mb-2">
						132명의 유저가 150개의
					</p>
					<p className="text-lg desktop:text-xl font-medium text-gray mb-10">
						티켓을 성취했어요
					</p>
				</div>
			</div>

			<div className="flex flex-col items-center justify-center w-[90%] desktop:w-[60%] ">
				<StyledButton
					styleName="landing"
					onClick={() => navigate("/signin")}
					type="button"
				>
					로그인
				</StyledButton>

				<OAuth />

				<button className="text-lg desktop:text-xl text-main ">
					<Link to="target">임시 target 이동</Link>
				</button>
			</div>
		</section>
	);
};

export default LandingPage;
