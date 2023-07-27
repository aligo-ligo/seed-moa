import { OliBodyImage } from "../../utils/constant/image";
import SkeletonElement from "../layout/Skeleton";
const TargetEmptyForm = () => {
	return (
		<>
			<div className=" p-6 w-[350px] h-[480px]  border-2 border-lightGray rounded-md cursor-pointer">
				<h2 className="text-xl font-medium text-center text-gray">
					목표를 생성해주세요
				</h2>
				<div className="mt-12 w-full h-[200px] px-6 mb-6 flex items-center justify-center">
					<SkeletonElement type="avatar" />
				</div>
			</div>
		</>
	);
};

export default TargetEmptyForm;
