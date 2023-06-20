import { FiAlignJustify } from "react-icons/fi";
import logo from "../../assets/logo/거북.jpeg";
import { useState } from "react";
import Sidebar from "../layout/Sidebar";
const Header = () => {
	const [isOpened, setIsOpen] = useState(false);
	const nickName = "이주영";

	console.log("test", isOpened);

	return (
		<header className="flex px-4 py-6 justify-between items-center w-full">
			<div className="flex justify-center items-center gap-2">
				<FiAlignJustify
					className="text-2xl cursor-pointer"
					onClick={() => setIsOpen(true)}
				/>
				<img src={logo} alt="자그마한 로고 사진" className="w-12" />
			</div>
			<h1 className="font-semibold">안녕하세요 {nickName}님</h1>
			{isOpened && <Sidebar isOpened={isOpened} setIsOpen={setIsOpen} />}
		</header>
	);
};

export default Header;
