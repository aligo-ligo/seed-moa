import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import logo from "../assets/logo/hero.jpeg";
import { heroImage } from "../utils/contants";

const NotFound = () => {
	const error = useRouteError();

	console.log(error);

	if (isRouteErrorResponse(error)) {
		return (
			<section className="flex flex-col items-center justify-center h-screen px-6 py-10 overflow-hidden">
				<div className="flex flex-col items-center justify-center">
					<img src={heroImage} alt="사진" className="w-3/5" />
					<h1 className="text-3xl desktop:text-4xl font-bold mt-4 mb-4">
						{error.status}
					</h1>
					<h2 className="text-2xl desktop:text-2xl font-bold mt-4 mb-4">
						{error.statusText}
					</h2>

					<h2 className="text-xl desktop:text-xl font-bold mt-4 mb-4">
						이전 페이지로 이동하기
					</h2>
					{/* <p>{error.data}</p> */}
				</div>
			</section>
		);
	} else {
		<section className="flex flex-col items-center justify-center h-screen px-6 py-10 overflow-hidden">
			<div className="flex flex-col items-center justify-center">
				<img src={logo} alt="사진" className="w-3/5" />
			</div>
		</section>;
	}
};

export default NotFound;
