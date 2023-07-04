import { OliBodyImage, heroImage } from "../../utils/contants";
import ProgressBar from "./ProgressBar";
const TargetEmptyForm = () => {
	return (
		<>
			<div className="mt-10 p-6 w-[350px] min-h-[200px] border-2 border-lightGray rounded-md cursor-pointer">
				<h2 className="font-medium text-center text-gray">
					목표를 생성해주세요
				</h2>
				<img src={OliBodyImage} alt="자그마한 로고 사진" className=" mx-auto" />
				<div className="flex w-60">
					<div className="flex flex-col w-1/2 p-2">
						<label className="font-medium text-center text-gray">성취률</label>
						<ProgressBar completed={0} />
					</div>
					<div className="flex flex-col w-1/2 p-2">
						<label className="font-medium text-center text-gray">
							성공 예측률
						</label>
						<ProgressBar completed={0} />
					</div>
				</div>
			</div>
		</>
	);
};

export default TargetEmptyForm;
