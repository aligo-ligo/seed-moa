import { FiX } from "react-icons/fi";
import usePopUp from "../../hooks/usePopUp";
import { FiChevronRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useAuthService } from "../../hooks/useAuth";
import { FiEdit } from "react-icons/fi";
import { CSSTransition } from "react-transition-group";
import "../../styles/Sidebar.css";

const Sidebar = () => {
	const { isSideBarOpen, outside, closeSideBar } = usePopUp();
	const authService = useAuthService();
	const navigate = useNavigate();

	const hook = () => {
		authService?.logout();
		closeSideBar();
	};

	return (
		<>
			<CSSTransition
				nodeRef={outside}
				in={isSideBarOpen}
				timeout={300}
				classNames="sidebar"
				unmountOnExit
			>
				<div
					ref={outside}
					className="sidebar p-3 bg-lighterGray w-1/2 shadow-2xl h-full"
				>
					<div className="flex justify-end">
						<FiX onClick={closeSideBar} onKeyDown={closeSideBar} />
					</div>
					<div className="px-4 py-6">
						<p className=" font-semibold">안녕하세요 이주영님</p>
						<div className="pt-4 text-gray font-semibold">
							<form>
								<button
									type="submit"
									className="flex justify-center items-center text-orange-300"
									onClick={hook}
								>
									로그아웃하기
									<FiChevronRight className="text-xl" />
								</button>
							</form>
						</div>
					</div>

					<div>
						{sidebarData.map(({ title, link, icon }, index) => {
							return (
								<div
									key={index}
									className="flex items-center cursor-pointer font-bold px-4 hover:text-gray"
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
		title: "F&Q 업데이트 예정",
		icon: <FiEdit />,
		link: "/target",
	},
];
