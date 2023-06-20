import { SetStateAction } from "react";
import { FiX } from "react-icons/fi";
import useSidebar from "../../hooks/useSideBar";
import { FiChevronRight } from "react-icons/fi";

type Props = {
	isOpened: boolean;
	setIsOpen: React.Dispatch<SetStateAction<boolean>>;
};

const Sidebar = ({ setIsOpen }: Props) => {
	const { outside, toggleSide } = useSidebar(setIsOpen);
	console.log("out", outside);

	return (
		<div
			className="absolute z-10 p-3 bg-[#e7e4e1] h-full w-2/3 top-0 left-0 ease-in"
			ref={outside}
		>
			<div className="flex justify-end">
				<FiX onClick={toggleSide} onKeyDown={toggleSide} />
			</div>
			<div className="px-4 py-6">
				<ul className=" font-semibold">안녕하세요 이주영님</ul>
				<div className="pt-4 text-gray font-semibold">
					<button className="flex justify-center items-center">
						로그아웃하기
						<FiChevronRight className="text-xl" />
					</button>
				</div>
			</div>

			<div className="px-4 py-6">전체 타켓 보러 가기</div>
			<div className="px-4 py-6">기능 준비중입니다</div>
		</div>
	);
};

export default Sidebar;
