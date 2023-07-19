import { useNavigate } from "react-router-dom";

import StyledButton from "../components/common/StyledButton";
import OAuth from "../components/auth/OAuth";
import { LogoImage, OliBodyImage } from "../utils/constant/image";
import { ACCESS_TOKEN } from "../utils/constant/auth";
import Header from "../components/target/Header";
import { useEffect } from "react";
import { useGuest } from "../hooks/useGuest";
import { useInfo } from "../hooks/useGetInfo";

const LandingPage = () => {
	const navigate = useNavigate();
	const isLoggedIn = localStorage.getItem(ACCESS_TOKEN);
	const guestService = useGuest();
	const { data: target } = useInfo(guestService);
	// const img = import.meta.env.VITE_BASE_URL;

	useEffect(() => {
		if (isLoggedIn) {
			navigate("/target");
		}
	}, [navigate, isLoggedIn]);

	return (
		<section className="relative flex flex-col items-center justify-start px-6 min-h-screen ">
			<Header />
			<div className="flex flex-col items-center justify-center ">
				<img src={OliBodyImage} alt="히어로" className="w-2/5" />
				<img src={LogoImage} alt="로고" className="w-3/5" />
				{/* <img src={`${img}/logo.png`} alt="로고" className="w-3/5" /> */}

				<div className="flex flex-col items-center w-80">
					<h2 className="text-xl desktop:text-2xl font-medium text-gray mt-12 mb-2">
						공유하여 목표를 달성해보세요!
					</h2>
					<p className="mt-10 text-lg desktop:text-xl font-medium text-gray mb-2">
						{`${target?.userCount || 0} 명의 유저가 ${
							target?.targetCount || 0
						}개의`}
					</p>
					<p className="text-lg desktop:text-xl font-medium text-gray mb-10">
						목표를 위해 달려가고 있어요
					</p>
				</div>
			</div>

			<div className="flex flex-col items-center justify-center w-[90%] desktop:w-[60%] gap-4">
				<StyledButton
					styleName="landing"
					onClick={() => navigate("/signin")}
					type="button"
				>
					로그인
				</StyledButton>
				<OAuth />
			</div>
		</section>
	);
};

export default LandingPage;
