import logo from "../../assets/logo/거북.jpeg";

const TargetForm = () => {
	const goal = "나는 이번 달에 5kg할꺼야~";
	return (
		<div className="mt-10 p-6 w-full min-h-[200px] border-2 border-mainHover rounded-md">
			<h2 className="font-medium">{goal}</h2>
			<img src={logo} alt="자그마한 로고 사진" className="w-48 mx-auto" />
			<div className="flex">
				<div className="flex flex-col w-1/2">
					<label>진행률</label>
					<span>퍼센트</span>
				</div>
				<div className="flex flex-col w-1/2">
					<label>투표율</label>
					<span>퍼센트</span>
				</div>
			</div>
		</div>
	);
};
export default TargetForm;
