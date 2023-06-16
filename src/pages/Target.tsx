import { useNavigate } from "react-router-dom";
import Header from "../components/target/Header";
import TargetForm from "../components/target/TargetForm";
import { FiEdit } from "react-icons/fi";

const Target = () => {
	const navigate = useNavigate();
	return (
		<div className="flex flex-col h-screen px-6 pb-10">
			<Header />
			<section className="flex flex-col mt-16">
				<h1 className="font-semibold text-2xl">현재 타켓 목록</h1>
				<TargetForm />
				<button
					className="mt-24 mx-auto w-1/3 h-14 bg-main rounded-lg"
					onClick={() => {
						navigate("/target/1");
					}}
				>
					<FiEdit className="mx-auto text-white text-2xl" />
				</button>
			</section>
		</div>
	);
};

export default Target;
