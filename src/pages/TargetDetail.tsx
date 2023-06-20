import { useQuery } from "@tanstack/react-query";
import Header from "../components/target/Header";
import { useInfo } from "../hooks/useInfo";
import { useParams } from "react-router-dom";

const TargetDetail = () => {
	const { id } = useParams();
	const infoService = useInfo();
	const { data: target } = useQuery(["target"], () => {
		return infoService?.getTarget(id);
	});

	// sidebar를 사용하는 페이지에서 최상위에 relative를 작성해야만 잘 사용할 수 있는데 이부분 리펙토링 필요
	return (
		<div className="relative flex flex-col items-center h-screen px-6 pb-10">
			<Header />
		</div>
	);
};

export default TargetDetail;
