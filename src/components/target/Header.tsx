import { FiAlignJustify, FiEdit } from "react-icons/fi";
import logo from "../../assets/logo/거북.jpeg";
import Sidebar from "../layout/Sidebar";
import { useAuthService } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import usePopUp from "../../hooks/usePopUp";

type Props = {
	name: string | null;
};

const Header = ({ name }: Props) => {
	console.log(name);
	const { openSideBar } = usePopUp();

	const authService = useAuthService();
	const navigate = useNavigate();

	return (
		<header className="flex py-6 justify-between items-center w-full">
			<div className="flex justify-center items-center gap-2">
				<FiAlignJustify
					className="text-2xl cursor-pointer"
					onClick={openSideBar}
				/>
				<img src={logo} alt="자그마한 로고 사진" className="w-12" />
			</div>
			<h1 className="font-semibold">안녕하세요 {name}님</h1>
			<Sidebar />
		</header>
	);
};

export default Header;
