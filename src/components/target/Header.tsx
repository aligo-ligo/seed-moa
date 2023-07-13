import Sidebar from "../layout/Sidebar";
import usePopUp from "../../hooks/usePopUp";
import { OliImage } from "../../utils/constant/contants";

type Props = {
	name?: string | null;
};

const Header = ({ name }: Props) => {
	const isNameExisted = !!name === true;
	console.log(
		"------------------------------------------------------",
		isNameExisted
	);
	const { openSideBar } = usePopUp();

	return (
		<div className="flex py-6 justify-between items-center w-full h-full">
			<div className="flex justify-center items-center gap-2">
				<img
					src={OliImage}
					alt="자그마한 로고 사진"
					className="phone:w-10 phone:border cursor-pointer desktop:w-12 desktop:border-2  p-1 rounded-xl"
					onClick={openSideBar}
				/>
			</div>
			{isNameExisted && <h1 className="font-semibold">안녕하세요 {name}님</h1>}
			<Sidebar isNameExisted={isNameExisted} name={name} />
		</div>
	);
};

export default Header;
