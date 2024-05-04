import IMAGE_MAP from "@/constants/image";
import usePopUp from "../../hooks/usePopUp";
import Sidebar from "../layout/Sidebar";

const Header = () => {
  const { openSideBar } = usePopUp();

  return (
    <header className="flex py-6 justify-between items-center w-full">
      <div className="flex justify-center items-center gap-2">
        <picture>
          <source srcSet={IMAGE_MAP.oliIconWithWebp} type="image/webp" />
          <img
            src={IMAGE_MAP.oliIcon}
            alt="lightweight-logo-image"
            className="phone:w-10 phone:border cursor-pointer desktop:w-12 desktop:border-2 border-mainDeep p-1 rounded-xl"
            onClick={openSideBar}
            loading="lazy"
          />
        </picture>
      </div>
      <Sidebar />
    </header>
  );
};

export default Header;
