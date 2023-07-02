import { FiX } from "react-icons/fi";
import useSidebar from "../../hooks/useSideBar";
import { FiChevronRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useAuthService } from "../../hooks/useAuth";
import { FiEdit } from "react-icons/fi";
import { CSSTransition } from "react-transition-group";
import { useRef } from "react";

const Sidebar = () => {
	// const { isOpen, outside, closeModal } = useSidebar();
	const authService = useAuthService();
	const navigate = useNavigate();
	// const nodeRef = useRef(null);

	return <></>;
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
