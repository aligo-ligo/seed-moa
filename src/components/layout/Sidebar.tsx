import { FiX } from "react-icons/fi";
import usePopUp from "../../hooks/usePopUp";
import { FiChevronRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useAuthService } from "../../hooks/useAuth";
import { FiEdit } from "react-icons/fi";
import { CSSTransition } from "react-transition-group";

const Sidebar = () => {
	const { isSideBarOpen, outside, closeSideBar } = usePopUp();
	const authService = useAuthService();
	const navigate = useNavigate();

	return (
		<>
			<CSSTransition
				nodeRef={outside}
				in={isSideBarOpen}
				timeout={100}
				classNames="translate-x-full"
				unmountOnExit
			>
				<div
					className={`absolute z-10 p-3 bg-[#e7e4e1] h-full w-2/3 top-0 left-0`}
					ref={outside}
				>
					<div className="flex justify-end duration-1000">
						<FiX onClick={closeSideBar} onKeyDown={closeSideBar} />
					</div>
					<div className="px-4 py-6">
						<ul className=" font-semibold">안녕하세요 이주영님</ul>
						<div className="pt-4 text-gray font-semibold">
							<button
								className="flex justify-center items-center"
								onClick={() => {
									authService?.logout();
									//예상이 안돼 실제 통신 과정에서 리팩토링 예정
									closeSideBar();
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
										closeSideBar();
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
		</>
	);
};

export default Sidebar;

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
