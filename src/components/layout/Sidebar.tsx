import { FiX } from "react-icons/fi";
import usePopUp from "../../hooks/usePopUp";
import { FiChevronRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useAuthService } from "../../hooks/useAuth";
import { FiEdit } from "react-icons/fi";
import { CSSTransition } from "react-transition-group";
import "../../styles/Sidebar.css";

type Props = {
	name: string | null;
};
const Sidebar = ({ name }: Props) => {
	const { isSideBarOpen, outside, closeSideBar } = usePopUp();
	const authService = useAuthService();
	const navigate = useNavigate();
	const isNameExisted = !!name === true;

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
					className="sidebar p-3 bg-lighterGray w-2/3 desktop:w-1/2 shadow-2xl h-full"
				>
					<div className="flex justify-end">
						<FiX onClick={closeSideBar} onKeyDown={closeSideBar} />
					</div>
					<div className="px-4 py-6">
						{isNameExisted ? (
							<p className=" font-semibold">안녕하세요 이주영님</p>
						) : (
							<p className=" font-semibold">로그인을 해주세요</p>
						)}

						<div className="pt-4 text-gray font-semibold">
							{isNameExisted && (
								<form>
									<button
										type="submit"
										className="flex justify-center items-center text-orange-400"
										onClick={hook}
									>
										로그아웃하기
										<FiChevronRight className="text-xl" />
									</button>
								</form>
							)}
						</div>
					</div>
					{isNameExisted ? (
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
					) : (
						<div>
							{landingSidebarData.map(({ title, link, icon }, index) => {
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
					)}
				</div>
			</CSSTransition>
		</>
	);
};

export default Sidebar;

const landingSidebarData = [
	{
		title: "로그인 하러가기",
		icon: <FiEdit />,
		link: "/signin",
	},
	{
		title: "F&Q 업데이트 예정",
		icon: <FiEdit />,
		link: "/faq",
	},
];

const sidebarData = [
	{
		title: "메인 페이지",
		icon: <FiEdit />,
		link: "/target",
	},
	{
		title: "F&Q 업데이트 예정",
		icon: <FiEdit />,
		link: "/faq",
	},
];
