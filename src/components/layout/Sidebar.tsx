import { FiX } from "react-icons/fi";
import useSidebar from "../../hooks/useSideBar";
import { FiChevronRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useAuthService } from "../../hooks/useAuth";
import { FiEdit } from "react-icons/fi";

const Sidebar = () => {
	const { outside, closeModal } = useSidebar();
	const authService = useAuthService();
	const navigate = useNavigate();

	return (
		<div
			className="absolute z-10 p-3 bg-[#e7e4e1] h-full w-2/3 top-0 left-0 ease-in"
			ref={outside}
		>
			<div className="flex justify-end">
				<FiX onClick={closeModal} onKeyDown={closeModal} />
			</div>
			<div className="px-4 py-6">
				<ul className=" font-semibold">안녕하세요 이주영님</ul>
				<div className="pt-4 text-gray font-semibold">
					<button
						className="flex justify-center items-center"
						onClick={() => {
							authService?.logout();
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
