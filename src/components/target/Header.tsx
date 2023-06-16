import { FiAlignJustify } from "react-icons/fi";
import logo from "../../assets/logo/거북.jpeg";
const Header = () => {
	const nickName = "이주영";
	return (
		<header className="flex px-4 py-6 justify-between items-center w-full">
			<div className="flex justify-center items-center gap-2">
				<FiAlignJustify className="text-2xl" />
				<img src={logo} alt="자그마한 로고 사진" className="w-12" />
			</div>
			<h1 className="font-semibold">안녕하세요 {nickName}님</h1>
		</header>
	);
};

export default Header;
