import usePopUp from "../../hooks/usePopUp";
import { LightOliImage, OliImage } from "../../utils/constant/image";
import Sidebar from "../layout/Sidebar";

type Props = {
  name?: string | null;
};

const Header = ({ name }: Props) => {
  const isNameExisted = !!name === true;
  const { openSideBar } = usePopUp();

  return (
    <div className="flex py-6 justify-between items-center w-full h-full">
      <div className="flex justify-center items-center gap-2">
        <picture>
          <source srcSet={LightOliImage} type="image/webp" />
          <img
            src={OliImage}
            alt="자그마한 로고 사진"
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
