import { FiEdit, FiX } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

import IMAGE_MAP from "@/constants/image";
import { useAuthService } from "../../hooks/useAuth";
import usePopUp from "../../hooks/usePopUp";
import useToastList from "../../hooks/useToastList";

import "../../styles/Sidebar.css";

type Props = {
  isNameExisted: boolean;
  name: string | null | undefined;
};
const Sidebar = ({ isNameExisted, name }: Props) => {
  const { isSideBarOpen, outside, closeSideBar } = usePopUp();
  const { show } = useToastList();
  const authService = useAuthService();
  const navigate = useNavigate();

  const hook = () => {
    authService?.logout();
    show("logoutToast");
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
              <p className=" font-semibold">{`안녕하세요 ${name}님`}</p>
            ) : (
              <p className=" font-semibold">로그인을 해주세요</p>
            )}

            <div className="pt-4 text-gray font-semibold">
              {isNameExisted && (
                <button
                  className="flex justify-center items-center text-orange-400"
                  onClick={hook}
                >
                  로그아웃하기
                </button>
              )}
            </div>
          </div>
          {isNameExisted ? (
            <div>
              {sidebarData.map(({ title, link, icon }, index) => {
                if (link.startsWith("https")) {
                  return (
                    <a
                      target="blank"
                      key={index}
                      className="flex items-center cursor-pointer font-bold px-4 hover:text-gray"
                      href={link}
                      onClick={() => {
                        closeSideBar();
                      }}
                    >
                      <div className="w-8">{icon}</div>
                      <div className="px-4 py-6">{title}</div>
                    </a>
                  );
                } else {
                  return (
                    <div
                      key={index}
                      className="flex items-center cursor-pointer font-bold px-4 hover:text-gray"
                      onClick={() => {
                        navigate(link);
                        closeSideBar();
                      }}
                    >
                      <div className="w-8">{icon}</div>
                      <div className="px-4 py-6">{title}</div>
                    </div>
                  );
                }
              })}
            </div>
          ) : (
            <div>
              {landingSidebarData.map(({ title, link, icon }, index) => {
                if (link.startsWith("https")) {
                  return (
                    <a
                      target="blank"
                      key={index}
                      className="flex items-center cursor-pointer font-bold px-4 hover:text-gray"
                      href={link}
                      onClick={() => {
                        closeSideBar();
                      }}
                    >
                      <div className="w-8">{icon}</div>
                      <div className="py-6">{title}</div>
                    </a>
                  );
                }
                return (
                  <div
                    key={index}
                    className="flex items-center cursor-pointer font-bold px-4 hover:text-gray"
                    onClick={() => {
                      navigate(link);
                      closeSideBar();
                    }}
                  >
                    <div className="">{icon}</div>
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
    title: "익명 피드백 주기",
    icon: <FiEdit />,
    link: "https://naver.me/5P2zatjt",
  },
  {
    title: "서비스 이용 노하우",
    icon: <FiEdit />,
    link: "/faq",
  },
];

const sidebarData = [
  {
    title: "메인 페이지",
    icon: <img src={IMAGE_MAP.oliIcon} alt="사진" />,
    link: "/target",
  },
  {
    title: "익명 피드백 주기",
    icon: <img src={IMAGE_MAP.shockedOliIcon} alt="사진" />,
    link: "https://naver.me/5P2zatjt",
  },
  {
    title: "서비스 이용 노하우",
    icon: <img src={IMAGE_MAP.theMostShockedOliIcon} alt="사진" />,
    link: "/faq",
  },
];
