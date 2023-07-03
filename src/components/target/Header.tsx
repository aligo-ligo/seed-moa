import { FiAlignJustify, FiEdit } from "react-icons/fi";

import Sidebar from "../layout/Sidebar";
import { useAuthService } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import usePopUp from "../../hooks/usePopUp";
import { LogoImage, heroImage } from "../../utils/contants";

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
					src={LogoImage}
					alt="자그마한 로고 사진"
					className="w-20 cursor-pointer"
					onClick={openSideBar}
				/>
				<img
					src={heroImage}
					alt="자그마한 로고 사진"
					className="w-12 cursor-pointer"
					onClick={openSideBar}
				/>
			</div>
			<h1 className="font-semibold">안녕하세요 {name}님</h1>
			<Sidebar />
		</header>
	);
};

export default Header;
