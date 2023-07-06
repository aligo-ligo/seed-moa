import { FiAlignJustify, FiEdit } from "react-icons/fi";

import Sidebar from "../layout/Sidebar";
import { useAuthService } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import usePopUp from "../../hooks/usePopUp";
import { LogoImage, OliImage, heroImage } from "../../utils/contants";

type Props = {
	name: string | null;
};

const Header = ({ name }: Props) => {
	console.log(name);
	const { openSideBar } = usePopUp();

	return (
		<header className="flex py-6 justify-between items-center w-full">
			<div className="flex justify-center items-center gap-2">
				<img
					src={OliImage}
					alt="자그마한 로고 사진"
					className="cursor-pointer border-2 p-1 rounded-xl"
					onClick={openSideBar}
				/>
			</div>
			<h1 className="font-semibold">안녕하세요 {name}님</h1>
		</header>
	);
};

export default Header;
