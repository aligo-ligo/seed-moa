import { OliBodyImage } from "../../utils/constant/image";
const TargetEmptyForm = () => {
	return (
		<>
			<div className="mt-10 p-6 w-[380px] h-[480px]  border-2 border-lightGray rounded-md cursor-pointer">
				<h2 className="text-xl font-medium text-center text-gray">
					목표를 생성해주세요
				</h2>
				<img src={OliBodyImage} alt="자그마한 로고 사진" className="mx-auto" />
			</div>
		</>
	);
};

export default TargetEmptyForm;
