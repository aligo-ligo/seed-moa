import { useQuery } from "@tanstack/react-query";
import Header from "../components/target/Header";
import { useInfo } from "../hooks/useInfo";

const TargetDetail = () => {
	const infoService = useInfo();
	const { data: target } = useQuery(["target", "all"], () => {
		return infoService?.getAllTarget();
	});

	console.log("target", target);
	return (
		<div className="flex flex-col items-center h-screen px-6 pb-10">
			<Header />
		</div>
	);
};

export default TargetDetail;
