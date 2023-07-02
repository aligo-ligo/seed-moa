import { FiAlignJustify, FiChevronRight, FiEdit, FiX } from "react-icons/fi";
import logo from "../../assets/logo/거북.jpeg";

import Sidebar from "../layout/Sidebar";
import useSidebar from "../../hooks/useSideBar";
import { useAuthService } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

type Props = {
	name: string | null;
};

const Header = ({ name }: Props) => {
	console.log(name);
	const { isOpen, openModal, outside, closeModal } = useSidebar();

	console.log("Header", isOpen);

	const authService = useAuthService();
	const navigate = useNavigate();

	return (
		<header className="flex py-6 justify-between items-center w-full">
			<div className="flex justify-center items-center gap-2">
				<FiAlignJustify
					className="text-2xl cursor-pointer"
					onClick={openModal}
				/>
				<img src={logo} alt="자그마한 로고 사진" className="w-12" />
			</div>
			<h1 className="font-semibold">안녕하세요 {name}님</h1>

			<CSSTransition
				nodeRef={outside}
				in={isOpen}
				timeout={100}
				classNames="translate-x-full"
				unmountOnExit
			>
				<div
					className={`absolute z-10 p-3 bg-[#e7e4e1] h-full w-2/3 top-0 left-0`}
					ref={outside}
				>
					<div className="flex justify-end duration-1000">
						<FiX onClick={closeModal} onKeyDown={closeModal} />
					</div>
					<div className="px-4 py-6">
						<ul className=" font-semibold">안녕하세요 이주영님</ul>
						<div className="pt-4 text-gray font-semibold">
							<button
								className="flex justify-center items-center"
								onClick={() => {
									authService?.logout();
									//예상이 안돼 실제 통신 과정에서 리팩토링 예정
									closeModal();
								}}
							>
								로그아웃하기
								<FiChevronRight className="text-xl" />
							</button>
						</div>
					</div>

					<div>
						{sidebarData.map(({ title, link, icon }) => {
							console.log(icon);
							return (
								<div
									className="flex items-center justify-center cursor-pointer"
									onClick={() => {
										navigate(link);
										closeModal();
									}}
								>
									<div>{icon}</div>
									<div className="px-4 py-6">{title}</div>
								</div>
							);
						})}
					</div>
				</div>
			</CSSTransition>
		</header>
	);
};

export default Header;
const sidebarData = [
	{
		title: "메인 페이지",
		icon: <FiEdit />,
		link: "/target",
	},
	{
		title: "메인 페이지",
		icon: <FiEdit />,
		link: "/target",
	},
	{
		title: "준비중입니다",
		icon: <FiEdit />,
		link: "/target",
	},
];
