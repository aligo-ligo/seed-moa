import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import logo from "../assets/logo/거북.jpeg";

const NotFound = () => {
	const error = useRouteError();

	console.log(error);
	if (isRouteErrorResponse(error)) {
		return (
			<section className="flex flex-col items-center justify-center h-screen px-6 py-10 overflow-hidden">
				<div className="flex flex-col items-center justify-center">
					<img src={logo} alt="사진" className="w-3/5" />
					<h1 className="text-3xl desktop:text-4xl font-bold mt-4 mb-4">
						Not found
					</h1>
					<h2>이전 페이지로 돌아가기 click!</h2>
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
