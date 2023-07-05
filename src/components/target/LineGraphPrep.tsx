import { OliBodyImage } from "../../utils/contants";

const LineGraphPrep = () => {
	return (
		<div className="my-3">
			<div className="flex justify-center h-36 bg-lighterGray">
				<img src={OliBodyImage} alt="이미지" />
			</div>
			<div className="flex flex-col items-center bg-lighterGray font-bold p-3">
				<p className="text-main">성취 달성 그래프</p>
				<p className="text-main text-3xl">Comming Soon</p>
			</div>
		</div>
	);
};

export default LineGraphPrep;
