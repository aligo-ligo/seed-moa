import IMAGE_MAP from "@/constants/image";
import usePopUp from "../../hooks/usePopUp";
import Sidebar from "../layout/Sidebar";

type Props = {
  name?: string | null;
};

const Header = ({ name }: Props) => {
  // HERE : HEADER 컴포넌트 재설계
  const isNameExisted = !!name === true;
  const { openSideBar } = usePopUp();

  return (
    <div className="flex py-6 justify-between items-center w-full">
      <div className="flex justify-center items-center gap-2">
        <picture>
          <source srcSet={IMAGE_MAP.oliIconWithWebp} type="image/webp" />
          <img
            src={IMAGE_MAP.oliIcon}
            alt="lightweight-logo-image"
            className="phone:w-10 phone:border cursor-pointer desktop:w-12 desktop:border-2  p-1 rounded-xl"
            onClick={openSideBar}
            loading="lazy"
          />
        </picture>
      </div>
      {isNameExisted && (
        <h1 className="font-semibold pointer-events-none">
          안녕하세요 {name}님
        </h1>
      )}
      <Sidebar isNameExisted={isNameExisted} name={name} />
    </div>
  );
};

export default Header;
